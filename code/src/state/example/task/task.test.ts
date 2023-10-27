import { Task, TaskStatus } from './task';

describe('[State - example] Task', () => {
  it('should create and change task state based on task action', () => {
    const task = new Task();
    expect(task.getState()).toBe(TaskStatus.Opened);

    task.review('John Snow');
    expect(task.getState()).toBe(TaskStatus.RequestToApprove);
    expect(task.getReviewer()).toBe('John Snow');

    task.reject('Daenerys Targaryen', 'Not enough business value supported.');
    expect(task.getState()).toBe(TaskStatus.Rejected);
    expect(task.getRejectReason()).toBe('Not enough business value supported.');
  });

  it('should throw error when reject task that is not in RequestToApprove state', () => {
    const task = new Task();
    expect(() => {
      task.reject('Daenerys Targaryen', 'Not enough business value supported.');
    }).toThrowError('Task is not in RequestToApprove state');
  });

  it('should throw error when review task that is not in Opened state', () => {
    const task = new Task();
    task.review('John Snow');
    task.reject('Daenerys Targaryen', 'Not enough business value supported.');

    expect(() => {
      task.review('John Snow');
    }).toThrowError('Task is not in Opened state');
  });

  it('state should be Approved when manager approve task', () => {
    const task = new Task();
    task.review('John Snow');
    task.approve('Daenerys Targaryen');

    expect(task.getState()).toBe(TaskStatus.Approved);
    expect(task.getApproval()).toBe('Daenerys Targaryen');
  });

  it('should throw error when approve task that is not in RequestToApprove state', () => {
    const task = new Task();
    expect(() => {
      task.approve('Daenerys Targaryen');
    }).toThrowError('Task is not in RequestToApprove state');
  });

  it('state should become `In Progress` when staff perform task', () => {
    const task = new Task();
    task.review('John Snow');
    task.approve('Daenerys Targaryen');
    task.performTask('John Snow');

    expect(task.getState()).toBe(TaskStatus.InProgress);
    expect(task.getStaffWhoPerformTask()).toBe('John Snow');
  });

  it('should throw error when perform task that is not in Approved state', () => {
    const task = new Task();
    expect(() => {
      task.performTask('John Snow');
    }).toThrowError('Task is not in Approved state');
  });

  it('state should become `finish` when staff finish task', () => {
    const task = new Task();
    task.review('John Snow');
    task.approve('Daenerys Targaryen');
    task.performTask('John Snow');
    task.finish();

    expect(task.getState()).toBe(TaskStatus.Finished);
  });

  it('should throw error when finish task that is not in InProgress state', () => {
    const task = new Task();
    expect(() => {
      task.finish();
    }).toThrowError('Task is not in InProgress state');
  });
});

import { Workflow, WorkflowStep } from './withClass';

describe('Workflow withClass', () => {
  const workflow = new Workflow([
    new WorkflowStep(
      '1',
      'Receive Order',
      'action',
      'Receive an order from a customer.',
      undefined,
      ['2']
    ),
    new WorkflowStep(
      '2',
      'Check Inventory',
      'action',
      'Check if the items in the order are in stock.',
      [(data) => data.isValid],
      ['3']
    ),
    new WorkflowStep(
      '3',
      'Check Inventory',
      'action',
      'Check if the items in the order are in stock.',
      [(data) => data.isValid, (data) => data.isInStock],
      []
    ),
  ]);
  it('should return the 2nd step', () => {
    const data = {
      currentStep: '1',
    };
    expect(workflow.getNextSteps(data)).toEqual(['2']);
  });

  it('should return an empty array of steps if next step is null', () => {
    const data = {
      currentStep: '1',
    };
    const workflow = new Workflow([
      new WorkflowStep(
        '1',
        'Receive Order',
        'action',
        'Receive an order from a customer.',
        undefined,
        undefined
      ),
    ]);
    expect(workflow.getNextSteps(data)).toEqual([]);
  });

  it('should return the 3rd step if data.isValid is true', () => {
    const data = {
      currentStep: '2',
      isValid: true,
    };
    expect(workflow.getNextSteps(data)).toEqual(['3']);
  });

  it('should return an empty array if data.isValid is false', () => {
    const data = {
      currentStep: '2',
      isValid: false,
    };
    expect(workflow.getNextSteps(data)).toEqual([]);
  });

  it('should throw error if invalid current step', () => {
    const data = {
      currentStep: '4',
    };
    expect(() => workflow.getNextSteps(data)).toThrowError('Step not found: 4');
  });

  it('should return finish if data.isValid and data.isInStock are true', () => {
    const data = {
      currentStep: '3',
      isValid: true,
      isInStock: true,
    };
    expect(workflow.getNextSteps(data)).toEqual([]);
  });
});

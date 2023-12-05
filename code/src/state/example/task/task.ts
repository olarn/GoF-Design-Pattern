export enum TaskStatus {
  Opened,
  RequestToApprove,
  Rejected,
  Approved,
  InProgress,
  Finished,
}

export class Task {
  private state: TaskStatus = TaskStatus.Opened;
  private reviewBy?: string;
  private rejectReason?: string;
  private rejectBy?: string;
  private approvedBy?: string;
  performTaskBy?: string;

  public getState(): TaskStatus {
    return this.state;
  }

  review(reviewer: string) {
    if (this.state !== TaskStatus.Opened) {
      throw new Error('Task is not in Opened state');
    }
    this.reviewBy = reviewer;
    this.state = TaskStatus.RequestToApprove;
  }

  reject(manager: string, reason: string) {
    if (this.state !== TaskStatus.RequestToApprove) {
      throw new Error('Task is not in RequestToApprove state');
    }

    this.rejectBy = manager;
    this.state = TaskStatus.Rejected;
    this.rejectReason = reason;
  }

  approve(manager: string) {
    if (this.state !== TaskStatus.RequestToApprove) {
      throw new Error('Task is not in RequestToApprove state');
    }
    this.approvedBy = manager;
    this.state = TaskStatus.Approved;
  }

  performTask(staff: string) {
    if (this.state !== TaskStatus.Approved) {
      throw new Error('Task is not in Approved state');
    }
    this.performTaskBy = staff;
    this.state = TaskStatus.InProgress;
  }

  getReviewer(): string | undefined {
    return this.reviewBy;
  }

  getRejectBy(): string | undefined {
    return this.rejectBy;
  }

  getRejectReason(): string | undefined {
    return this.rejectReason;
  }

  getApproval(): string | undefined {
    return this.approvedBy;
  }

  finish() {
    if (this.state !== TaskStatus.InProgress) {
      throw new Error('Task is not in InProgress state');
    }
    this.state = TaskStatus.Finished;
  }

  getStaffWhoPerformTask(): any {
    return this.performTaskBy;
  }
}

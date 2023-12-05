export class Workflow {
  private readonly steps: WorkflowStep[];

  constructor(steps: WorkflowStep[]) {
    this.steps = steps;
  }

  getNextSteps(data: any): Array<string> {
    const currentStep = this.findStepById(data.currentStep);
    if (!currentStep) {
      throw new Error(`Step not found: ${data.currentStep}`);
    }
    if (!currentStep.isConditionMet(data)) {
      return [];
    }

    return currentStep.nextSteps || [];
  }

  private findStepById(stepId: string): WorkflowStep | undefined {
    return this.steps.find((step) => step.id === stepId);
  }
}

export class WorkflowStep {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly type: string,
    readonly description: string,
    readonly conditions?: Array<(data: any) => boolean>,
    readonly nextSteps?: Array<string>
  ) {}

  isConditionMet(data: any): boolean {
    if (!this.conditions) {
      return true;
    }

    for (const condition of this.conditions) {
      if (!condition(data)) {
        return false;
      }
    }

    return true;
  }
}

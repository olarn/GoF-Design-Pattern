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
      return ['invalid'];
    }

    return currentStep.nextSteps || [];
  }

  private findStepById(stepId: string): WorkflowStep | undefined {
    return this.steps.find((step) => step.id === stepId);
  }
}

class WorkflowStep {
  readonly id: string;
  readonly name: string;
  readonly type: string;
  readonly description: string;
  readonly conditions?: Array<(data: any) => boolean>;
  readonly nextSteps?: Array<string>;

  constructor(
    id: string,
    name: string,
    type: string,
    description: string,
    conditions?: Array<(data: any) => boolean>,
    nextSteps?: Array<string>
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.description = description;
    this.conditions = conditions;
    this.nextSteps = nextSteps;
  }

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

const workflow: Workflow = new Workflow([
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
    'Validate Order',
    'action',
    'Validate the order for accuracy and completeness.',
    undefined,
    ['3']
  ),
  new WorkflowStep(
    '3',
    'Check Inventory',
    'action',
    'Check if the items in the order are in stock.',
    [(data) => data.isValid],
    ['4']
  ),
  new WorkflowStep(
    '4',
    'Process Payment',
    'action',
    'Process the payment for the order.',
    [(data) => data.inStock],
    ['5']
  ),
  new WorkflowStep(
    '5',
    'Fulfill Order',
    'action',
    'Fulfill the order by shipping the items.',
    [(data) => data.isPaid],
    ['6']
  ),
  new WorkflowStep(
    '6',
    'Send Confirmation Email',
    'action',
    'Send a confirmation email to the customer.',
    [(data) => data.isFulfilled],
    []
  ),
]);

const data = {
  currentStep: '3',
  isValid: false,
};

const nextSteps = workflow.getNextSteps(data);
console.log(nextSteps); // Output: ["3"]

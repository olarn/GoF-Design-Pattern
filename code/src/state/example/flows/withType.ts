export type WorkflowStep = {
  id: string;
  name: string;
  type: string;
  description: string;
  conditions?: Array<(data: any) => boolean>;
  nextSteps?: Array<string>;
};

type Workflow = {
  name: string;
  description: string;
  steps: Array<WorkflowStep>;
};

const getNextSteps = (workflow: Workflow, data: any): Array<string> => {
  const currentStep = workflow.steps.find(
    (step) => step.id === data.currentStep
  );
  if (!currentStep) {
    throw new Error(`Step not found: ${data.currentStep}`);
  }
  if (currentStep.conditions) {
    const isStepValid = currentStep.conditions.every((condition) =>
      condition(data)
    );
    if (!isStepValid) {
      return [];
    }
  }

  return currentStep.nextSteps || [];
};

const workflow: Workflow = {
  name: 'Order Processing Workflow',
  description:
    'This workflow processes orders from customer placement to delivery.',
  steps: [
    {
      id: '1',
      name: 'Receive Order',
      type: 'action',
      description: 'Receive an order from a customer.',
      nextSteps: ['2'],
    },
    {
      id: '2',
      name: 'Validate Order',
      type: 'action',
      description: 'Validate the order for accuracy and completeness.',
      nextSteps: ['3'],
    },
    {
      id: '3',
      name: 'Check Inventory',
      type: 'action',
      description: 'Check if the items in the order are in stock.',
      conditions: [(data) => data.isValid],
      nextSteps: ['4'],
    },
    {
      id: '4',
      name: 'Process Payment',
      type: 'action',
      description: 'Process the payment for the order.',
      conditions: [(data) => data.inStock],
      nextSteps: ['5'],
    },
    {
      id: '5',
      name: 'Fulfill Order',
      type: 'action',
      description: 'Fulfill the order by shipping the items.',
      conditions: [(data) => data.isPaid],
      nextSteps: ['6'],
    },
    {
      id: '6',
      name: 'Send Confirmation Email',
      type: 'action',
      description: 'Send a confirmation email to the customer.',
      conditions: [(data) => data.isFulfilled],
      nextSteps: [],
    },
  ],
};

const data = {
  currentStep: '3',
  isValid: false,
};

const nextSteps = getNextSteps(workflow, data);
console.log(nextSteps); // Output: ["3"]

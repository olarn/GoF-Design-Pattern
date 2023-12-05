import { Workflow, getNextSteps } from './withType';

describe('Workflow withType', () => {
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
        conditions: [(data) => data.isValid, (data) => data.inStock],
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

  it('should return the 2nd step', () => {
    const data = {
      currentStep: '1',
    };
    expect(getNextSteps(workflow, data)).toEqual(['2']);
  });

  it('should return an empty array of steps if next step is null', () => {
    const data = {
      currentStep: '1',
    };
    const workflow = {
      name: 'Order Processing Workflow',
      description:
        'This workflow processes orders from customer placement to delivery.',
      steps: [
        {
          id: '1',
          name: 'Receive Order',
          type: 'action',
          description: 'Receive an order from a customer.',
        },
      ],
    };
    expect(getNextSteps(workflow, data)).toEqual([]);
  });

  it('should return the 3rd step if data.isValid is true', () => {
    const data = {
      currentStep: '2',
      isValid: true,
    };
    expect(getNextSteps(workflow, data)).toEqual(['3']);
  });

  it('should return an empty array of steps if data.isValid is false', () => {
    const data = {
      currentStep: '3',
      isValid: false,
    };
    expect(getNextSteps(workflow, data)).toEqual([]);
  });

  it('should return the 4th step if data.inStock is true', () => {
    const data = {
      currentStep: '3',
      isValid: true,
      inStock: true,
    };
    expect(getNextSteps(workflow, data)).toEqual(['4']);
  });

  it('should return an empty array of steps if data.inStock is false', () => {
    const data = {
      currentStep: '4',
      isValid: true,
      inStock: false,
    };
    expect(getNextSteps(workflow, data)).toEqual([]);
  });

  it('should return the 5th step if data.isPaid and data.inStock is true', () => {
    const data = {
      currentStep: '4',
      isValid: true,
      inStock: true,
    };
    expect(getNextSteps(workflow, data)).toEqual(['5']);
  });
});

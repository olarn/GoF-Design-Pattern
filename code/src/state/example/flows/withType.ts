export type WorkflowStep = {
  id: string;
  name: string;
  type: string;
  description: string;
  conditions?: Array<(data: any) => boolean>;
  nextSteps?: Array<string>;
};

export type Workflow = {
  name: string;
  description: string;
  steps: Array<WorkflowStep>;
};

export const getNextSteps = (workflow: Workflow, data: any): Array<string> => {
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

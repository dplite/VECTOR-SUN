import { BaseNode } from "./baseNode";

export const MultiplePromptsNode = ({ nodeId, initialData }) => {
  const inputConnectors = [
    { id: `${nodeId}-inputA`, style: { top: "25%" } },
    { id: `${nodeId}-inputB`, style: { top: "50%" } },
  ];

  const outputConnectors = [{ id: `${nodeId}-output` }];

  return (
    <BaseNode
      id={nodeId}
      label="Multiple Prompts"
      data={initialData}
      inputHandles={inputConnectors}
      outputHandles={outputConnectors}
      type="multiplePromptsNode"
    />
  );
};

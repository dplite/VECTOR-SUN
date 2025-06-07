import { BaseNode } from "./baseNode";

export const AdditionNode = ({ nodeId, initialData }) => {
  const inputConnectors = [
    { id: `${nodeId}-inputA`, style: { top: "25%" } },
    { id: `${nodeId}-inputB`, style: { top: "50%" } },
    { id: `${nodeId}-inputC`, style: { top: "75%" } },
  ];

  const outputConnectors = [{ id: `${nodeId}-output` }];

  return (
    <BaseNode
      id={nodeId}
      label="Addition"
      data={initialData}
      inputHandles={inputConnectors}
      outputHandles={outputConnectors}
      type="additionNode"
    />
  );
};

// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ResponseNode = ({ nodeId, initialData }) => {
  const inputConnectors = [
    { id: `${nodeId}-inputA`, style: { top: "25%" } },
    { id: `${nodeId}-inputB`, style: { top: "50%" } },
  ];
  const outputConnectors = [];

  return (
    <BaseNode
      id={nodeId}
      label="Response"
      data={initialData}
      inputHandles={inputConnectors}
      outputHandles={outputConnectors}
      type="responseNode"
    />
  );
};

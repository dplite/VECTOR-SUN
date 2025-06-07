// outputNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const inputHandles = [{ id: `${id}-value` }];
  const outputHandles = [];

  return (
    <BaseNode
      id={id}
      label="Output"
      data={data}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      type="outputNode"
    />
  );
};

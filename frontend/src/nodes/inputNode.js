// inputNode.js

import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const inputHandles = [];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Input"
      data={data}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      type="inputNode"
    />
  );
};

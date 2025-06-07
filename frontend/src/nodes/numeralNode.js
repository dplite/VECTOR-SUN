import { BaseNode } from "./baseNode";

export const NumeralNode = (props) => {
  const { id, data } = props;

  const inputHandles = [];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Number Input"
      data={data}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      type="numeralInput"
    />
  );
};

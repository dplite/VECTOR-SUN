// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="multiplier" label="Multiplier" />
        <DraggableNode type="addition" label="Addition" />
        <DraggableNode type="numeralInput" label="Numeral Node" />
        <DraggableNode type="multiplePrompts" label="Multiple Prompts" />
        <DraggableNode type="response" label="Response" />
      </div>
    </div>
  );
};

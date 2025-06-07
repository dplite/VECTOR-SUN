import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Handle, Position } from "reactflow";

export const VariableTextNode = ({ nodeId, initialData }) => {
  const [textValue, setTextValue] = useState(initialData?.text || "");
  const [variableHandles, setVariableHandles] = useState([]);

  const baseHandleStyle = {
    backgroundColor: "#ffffff",
    width: 15,
    height: 15,
    border: "1px solid #388e3c", // MUI green 700
  };

  // Update handles based on variables detected in text
  const updateVariableHandles = (text) => {
    const variableRegex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...text.matchAll(variableRegex)];

    // Create handles for unique variables
    const uniqueVars = Array.from(new Set(matches.map((m) => m[1])));

    const handles = uniqueVars.map((variable, idx) => ({
      id: `${nodeId}-${variable}`,
      variable,
      style: { top: `${(idx + 1) * 15}%` },
    }));

    setVariableHandles(handles);
  };

  // On textarea change
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setTextValue(newText);
    updateVariableHandles(newText);
  };

  // Initialize handles on mount
  useEffect(() => {
    updateVariableHandles(textValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "relative",
        padding: "1rem 1.25rem",
        width: 320,
        border: "2px solid #4caf50", // MUI green 500
        backgroundColor: "#f5f5f5", // MUI gray 100
        display: "flex",
        flexDirection: "column",
        gap: 16,
        borderRadius: 8,
        boxShadow:
          "0 2px 4px rgba(56, 142, 60, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${nodeId}-output`}
        style={{
          ...baseHandleStyle,
          borderColor: "#4caf50",
          boxShadow: "0 0 6px #4caf50",
        }}
        className="handle-output"
      />

      {/* Text Input */}
      <TextField
        multiline
        minRows={4}
        label="Prompt"
        placeholder="Enter text with variables like {{context}}"
        value={textValue}
        onChange={handleTextChange}
        variant="outlined"
        fullWidth
        InputLabelProps={{ style: { color: "#388e3c" } }} // green label
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
            backgroundColor: "#ffffff",
          },
          "& .MuiInputBase-input": {
            fontSize: "1.1rem",
            fontWeight: 500,
          },
        }}
      />

      {/* Variable Handles */}
      {variableHandles.map(({ id, variable, style }) => (
        <div
          key={id}
          style={{
            position: "absolute",
            left: 0,
            ...style,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={id}
            style={{
              ...baseHandleStyle,
              borderColor: "#4caf50",
              boxShadow: "0 0 6px #4caf50",
              cursor: "pointer",
            }}
            className="handle-variable"
          />
          <div
            style={{
              fontSize: 12,
              color: "#757575", // MUI gray 600
              width: 100,
              userSelect: "none",
            }}
          >
            {variable}
          </div>
        </div>
      ))}
    </div>
  );
};

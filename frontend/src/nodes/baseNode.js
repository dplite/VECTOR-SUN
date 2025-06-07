import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";
import DynamicFormField from "../components/DynamicFormField";
import { customFields } from "../config";

export const BaseNode = ({
  id,
  label,
  data = {},
  inputHandles = [],
  outputHandles = [],
  nodeStyle = {},
  handleStyle = {},
  children,
  className = "",
  type,
}) => {
  // Initialize form values with defaults immediately
  const fieldList = customFields(id)[type] || [];
  const initialFormValues = fieldList.reduce((acc, field) => {
    if (data[field.name] !== undefined) {
      acc[field.name] = data[field.name];
    } else if (field.name.toLowerCase().includes("name")) {
      acc[field.name] = id.replace(
        `custom${label}-`,
        `${label.toLowerCase()}_`
      );
    } else {
      acc[field.name] = field.default || "";
    }
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialFormValues);

  const defaultConnectorStyle = {
    background: "#ffffff",
    width: "12px",
    height: "12px",
    border: "2px solid #16a34a", // green-600
  };

  const handleFieldChange = (fieldName, value) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div
      style={{ ...nodeStyle }}
      className={`px-5 py-4 w-80 border-2 bg-white flex flex-col gap-2  border-blue-600 shadow-lg rounded-lg  ${className}`}
    >
      <div>
        <span className="text-green-700 text-lg font-semibold">{label}</span>
      </div>

      {children && <div>{children}</div>}

      <div className="flex flex-col gap-3">
        {fieldList?.map((field, index) => (
          <DynamicFormField
            key={index}
            field={field}
            value={formValues[field.name] || ""}
            onChange={handleFieldChange}
            label={field.label}
          />
        ))}
      </div>

      {inputHandles.map((handle, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            ...defaultConnectorStyle,
            ...handleStyle,
            ...handle.style,
          }}
          className="rounded-full"
        />
      ))}

      {outputHandles.map((handle, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            ...defaultConnectorStyle,
            ...handleStyle,
            ...handle.style,
          }}
          className="rounded-full"
        />
      ))}
    </div>
  );
};

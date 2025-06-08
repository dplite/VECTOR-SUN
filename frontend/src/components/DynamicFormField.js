import React from "react";
import {
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { CustomSelect } from "./CustomSelect";

const DynamicFormField = ({ field, value = "", onChange, label }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value, field.name, "ddd");
    onChange(field.name, e.target.value);
  };

  switch (field.type) {
    case "select":
      const selectValue = value || field.default || field.options[0] || "";
      return (
        <CustomSelect
          label={label}
          value={selectValue}
          options={field.options}
          onChange={(val) => onChange(field.name, val)}
        />
      );

    case "text":
      return (
        <TextField
          type="text"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      );

    case "number":
      return (
        <TextField
          type="number"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      );

    case "checkbox":
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={Boolean(value)}
              onChange={(e) => onChange(field.name, e.target.checked)}
            />
          }
          label={label}
        />
      );

    default:
      return (
        <TextField
          type="text"
          label={label}
          value={value || ""}
          onChange={handleInputChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
      );
  }
};

export default DynamicFormField;

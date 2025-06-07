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

const DynamicFormField = ({ field, value = "", onChange, label }) => {
  const handleInputChange = (e) => {
    onChange(field.name, e.target.value);
  };

  switch (field.type) {
    case "select":
      const selectValue = value || field.default || field.options[0] || "";
      return (
        <FormControl fullWidth margin="normal">
          <InputLabel>{label}</InputLabel>
          <Select
            value={selectValue}
            label={label}
            onChange={handleInputChange}
            sx={{
              backgroundColor: "white",
              "& .MuiSelect-select": {
                backgroundColor: "white",
              },
              "& .MuiPaper-root": {
                zIndex: 9999,
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  zIndex: 9999,
                },
              },
            }}
          >
            {field.options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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

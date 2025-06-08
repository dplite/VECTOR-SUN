import React, { useState, useRef } from "react";
import {
  TextField,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const CustomSelect = ({ label, value, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <>
      <TextField
        label={label}
        value={value}
        onClick={() => setOpen(!open)}
        fullWidth
        inputRef={anchorRef}
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
        }}
      />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        style={{ zIndex: 1300, width: anchorRef.current?.clientWidth }}
        disablePortal
      >
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <Paper elevation={4} style={{ maxHeight: 200, overflow: "auto" }}>
            <List dense>
              {options.map((option) => (
                <ListItemButton
                  key={option}
                  onClick={() => handleSelect(option)}
                  selected={option === value}
                >
                  <ListItemText primary={option} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

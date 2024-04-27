import React from "react";
import { TextField } from "@mui/material";
const MuiTextField = () => {
  return (
    <div>
      <TextField
        variant="outlined"
        label="outlined"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <TextField variant="filled" label="filled" />
      <TextField variant="standard" label="standard" />
    </div>
  );
};

export default MuiTextField;

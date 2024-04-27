import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditIcon from "@mui/icons-material/Edit";
import FlightIcon from "@mui/icons-material/Flight";

const MuiButton = () => {
  return (
    <div>
      <div>
        <h1>Varient</h1>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outelined</Button>
        <Button variant="Text">Text</Button>
      </div>
      <div>
        <h1>Color</h1>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="warning">Warning</Button>
        <Button color="error" variant="contained">
          Error
        </Button>
      </div>
      <div>
        <h1>Button with icon and text</h1>
        <Button variant="contained" startIcon={<SendIcon />}>
          Send Email
        </Button>
        <Button variant="contained" color="secondary" endIcon={<EditIcon />}>
          Edit User
        </Button>
        <h1>Icon button</h1>
        <Button>
          <FlightIcon />
        </Button>
      </div>
    </div>
  );
};

export default MuiButton;

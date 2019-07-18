import TextField from "@material-ui/core/TextField";
import React from "react";

const Input = () => {
  return (
    <React.Fragment>
      <TextField value={''} label={"Name"} fullWidth />
    </React.Fragment>
  )
};

export default Input;
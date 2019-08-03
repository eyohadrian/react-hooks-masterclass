import TextField from "@material-ui/core/TextField";
import React from "react";
import {useActionsDisplayContext} from "./context";

const Input = () => {
  const {references} = useActionsDisplayContext();
  return (
    <TextField inputRef={references.name} label={"Name"} fullWidth />
  )
};

export default Input;
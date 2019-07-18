import TextField from "@material-ui/core/TextField";
import React from "react";
import {useActionsDisplayContext} from "./context";

const Input = () => {
  const {references} = useActionsDisplayContext();
  return (
    <React.Fragment>
      <TextField inputRef={references.name} label={"Name"} fullWidth />
    </React.Fragment>
  )
};

export default Input;
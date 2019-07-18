import React from "react";
import {withStyles} from "@material-ui/core";
import Input from "./Input";
import Actions from "./Actions";
import style from './style';


const ActionsDisplay = withStyles(style.actionsDisplay)(({classes}) => {

  return (
      <div className={classes.root}>
        <Input />
        <Actions />
      </div>
  )
});

export default ActionsDisplay
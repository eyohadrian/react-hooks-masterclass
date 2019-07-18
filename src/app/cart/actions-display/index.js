import React from "react";
import {withStyles} from "@material-ui/core";
import Input from "./Input";
import Actions from "./Actions";
import {ActionsDisplayContextProvider} from './context';
import style from './style';


const ActionsDisplay = withStyles(style.actionsDisplay)(({classes}) => {

  return (
    <ActionsDisplayContextProvider>
      <div className={classes.root}>
        <Input />
        <Actions />
      </div>
    </ActionsDisplayContextProvider>
  )
});

export default ActionsDisplay
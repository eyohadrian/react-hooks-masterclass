import React from "react";
import {withStyles} from "@material-ui/core";
import Input from "./Input";
import Actions from "./Actions";
import {ActionsDisplayContextProvider} from './context';

const style = {
  root: {
    gridColumn: '2',
    gridRow: '2',
    padding: '80px 160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};


const ActionsDisplay = withStyles(style)(({classes}) => {

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
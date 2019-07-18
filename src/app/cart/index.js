import Typography from "@material-ui/core/Typography";
import React from "react";
import {withStyles} from "@material-ui/core";
import ActionsDisplay from "./actions-display";
import List from "./list";
import style from './style';


const Cart = withStyles(style)(({classes}) => {

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant={"h1"}>Cart</Typography>
      </div>
      <List/>
      <ActionsDisplay/>
    </div>
  )
});
export default Cart
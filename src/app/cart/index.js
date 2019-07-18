import Typography from "@material-ui/core/Typography";
import React, {useEffect} from "react";
import {withStyles} from "@material-ui/core";
import ActionsDisplay from "./actions-display";
import List from "./list";
import {useAppContext} from "../../context";
import {CART_CLEAR_CART} from "../actions";

const style = {
  root: {
    height: '80%',
    width: '80%',
    display: 'grid',
    gridTemplateRows: '20% 80%',
    gridTemplateColumns: '50% 50%'
  },
  header: {
    justifySelf: 'center',
    gridColumn: '1 / 3',
    gridRow: '1',
    alignSelf: 'center'
  },
};
const Cart = withStyles(style)(({classes}) => {
  const {dispatch} = useAppContext();
  useEffect(() => {
    dispatch({type: CART_CLEAR_CART});
  }, []);

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
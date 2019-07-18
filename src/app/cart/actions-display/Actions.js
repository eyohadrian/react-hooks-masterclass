import {withStyles} from "@material-ui/core";
import React from 'react';
import Button from "@material-ui/core/Button";
import {CART_ADD_ELEMENT, CART_CLEAR_CART, APP_CHANGE_SCREEN} from "../../../actions";
import {useAppContext} from "../../../context";
import {useActionsDisplayContext} from "./context";
import style from './style';

const Actions = withStyles(style.actions)(({classes}) => {

  const {dispatch} = useAppContext();
  const {references} = useActionsDisplayContext();

  return (
    <div className={classes.root}>
      <Button variant={"contained"} color={"primary"} className={classes.btn} onClick={() => dispatch({type: CART_ADD_ELEMENT, name: references.name.current.value})}>Add</Button>
      <Button variant={"contained"} color={"secondary"} className={classes.btn} onClick={() => dispatch({type: CART_CLEAR_CART})}>Clear</Button>
      <Button variant={"contained"} className={classes.submit} onClick={() => dispatch({type: APP_CHANGE_SCREEN})}>Submit</Button>
    </div>
  )
});
export default Actions;
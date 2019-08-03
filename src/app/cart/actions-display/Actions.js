import {withStyles} from "@material-ui/core";
import React, {useMemo} from 'react';
import Button from "@material-ui/core/Button";
import {CART_ADD_ELEMENT, CART_CLEAR_CART, APP_CHANGE_SCREEN} from "../../../actions";
import {useAppContext} from "../../../context";
import {useActionsDisplayContext} from "./context";
import style from './style';

const Actions = withStyles(style.actions)(({classes, reference, dispatch}) => (
  <div className={classes.root}>
    <Button variant={"contained"} color={"primary"} className={classes.btn} onClick={() => dispatch({type: CART_ADD_ELEMENT, name: reference.current.value})}>Add</Button>
    <Button variant={"contained"} color={"secondary"} className={classes.btn} onClick={() => dispatch({type: CART_CLEAR_CART})}>Clear</Button>
    <Button variant={"contained"} className={classes.submit} onClick={() => dispatch({type: APP_CHANGE_SCREEN})}>Submit</Button>
  </div>
));

const ControlledActions = () => {
  const {dispatch} = useAppContext();
  const {references} = useActionsDisplayContext();
  return useMemo(() => <Actions dispatch={dispatch} reference={references.name}/>, [dispatch, references.name]);
};

export default ControlledActions;
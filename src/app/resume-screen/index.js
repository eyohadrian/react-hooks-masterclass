import withStyles from "@material-ui/core/styles/withStyles";
import React from 'react';
import {Typography} from "@material-ui/core";
import {useAppContext} from "../../context";
import Button from "@material-ui/core/Button";
import {APP_CHANGE_SCREEN} from "../actions";
import Items from "../../components/items";

const style = {
  root: {
    height: '80%',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};
const ResumeScreen = withStyles(style)(({classes}) => {
  const {state, dispatch} = useAppContext();
  return (
    <div className={classes.root}>
      <div><Typography variant={"h1"}>Resume</Typography></div>
      <Items list={state.list}/>
      <Button onClick={() => dispatch({type: APP_CHANGE_SCREEN})}>Return</Button>
    </div>
  )
});

export default ResumeScreen;
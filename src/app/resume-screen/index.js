import withStyles from "@material-ui/core/styles/withStyles";
import React from 'react';
import {Typography} from "@material-ui/core";
import {useAppContext} from "../../context";
import Button from "@material-ui/core/Button";
import {APP_CHANGE_SCREEN} from "../../actions";
import Items from "../../components/items";
import style from './style';

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
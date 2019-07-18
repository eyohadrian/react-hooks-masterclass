import {withStyles} from "@material-ui/core";
import React from 'react';
import Button from "@material-ui/core/Button";
import style from './style';

const Actions = withStyles(style.actions)(({classes}) => {

  return (
    <div className={classes.root}>
      <Button variant={"contained"} color={"primary"} className={classes.btn} onClick={() => {}}>Add</Button>
      <Button variant={"contained"} color={"secondary"} className={classes.btn} onClick={() =>{}}>Clear</Button>
      <Button variant={"contained"} className={classes.submit} onClick={() => {}}>Submit</Button>
    </div>
  )
});
export default Actions;
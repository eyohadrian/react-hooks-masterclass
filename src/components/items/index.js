import React from "react";
import {Typography} from "@material-ui/core/index";
import Item from "./Item";
import withStyles from "@material-ui/core/styles/withStyles";
import style from './style';

const Items = withStyles(style)(({list, classes}) => {
  return (
    <ul className={classes.root}>
      {list.length ? list.map(name => <Item name={name}/>) : <Typography variant={"subtitle1"}>No items</Typography>}
    </ul>
  )
});

export default Items;
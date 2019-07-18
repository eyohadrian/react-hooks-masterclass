import React from "react";
import {Typography} from "@material-ui/core/index";
import Item from "./Item";
import withStyles from "@material-ui/core/styles/withStyles";

const style = {
  root: {
    height: 400,
    overflow: 'scroll'
  }
};

const Items = withStyles(style)(({list}) => {
  return (
    <ul>
      {list.length ? list.map(name => <Item name={name}/>) : <Typography variant={"subtitle1"}>No items</Typography>}
    </ul>
  )
});

export default Items;
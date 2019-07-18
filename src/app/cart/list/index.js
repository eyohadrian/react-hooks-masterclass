import {withStyles} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Items from "../../../components/items";
import style from "./style";

const List = withStyles(style)(({classes}) => {

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant={"h3"}>List</Typography>
        <Typography variant={"h4"}>Nº items {0}</Typography>
      </div>
      <Items list={[]}/>
    </div>
  )
});

export default List;
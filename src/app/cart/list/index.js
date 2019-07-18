import {withStyles} from "@material-ui/core";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Items from "../../../components/items";
import {useAppContext} from "../../../context";

const style = {
  root: {
    gridColumn: '1',
    gridRow: '2',
    padding: '40px 80px' ,
  }
};
const List = withStyles(style)(({classes}) => {
  const {state} = useAppContext();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant={"h3"}>List</Typography>
        <Typography variant={"h4"}>Nº items {state.list.length}</Typography>
      </div>
      <Items list={state.list}/>
    </div>
  )
});

export default List;
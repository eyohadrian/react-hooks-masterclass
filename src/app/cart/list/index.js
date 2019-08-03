import {withStyles} from "@material-ui/core";
import React, {useMemo} from "react";
import Typography from "@material-ui/core/Typography";
import Items from "../../../components/items";
import {useAppContext} from "../../../context";
import style from "./style";


const Counter = () => {
  const {state} = useAppContext();
  return <Typography variant={"h4"}>Nº items {state.list.length}</Typography>
};

const ControlledItems = () => {
  const {state} = useAppContext();
  return useMemo(() =>  <Items list={state.list}/>, [state.list]);
};

const List = withStyles(style)(({classes}) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant={"h3"}>List</Typography>
        <Counter/>
      </div>
      <ControlledItems/>
    </div>
  )
});

export default List;
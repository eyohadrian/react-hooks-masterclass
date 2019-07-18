import React from 'react';
import {withStyles} from "@material-ui/core";
import Cart from "./cart";
import {useAppContext} from "../context";
import ResumeScreen from "./resume-screen";
import style from './style';


const App = withStyles(style)(({classes}) => {
  const {state} = useAppContext();

  const isNotSubmited = !state.submit;
  return (
    <div className={classes.root}>
      {
        isNotSubmited
          ? <Cart />
          : <ResumeScreen/>
      }
    </div>
  );
});

export default App;

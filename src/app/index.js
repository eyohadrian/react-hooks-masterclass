import React, {useEffect} from 'react';
import {withStyles} from "@material-ui/core";
import Cart from "./cart";
import {useAppContext} from "../context";
import ResumeScreen from "./resume-screen";
import {CART_CLEAR_CART} from "./actions";

const style = {
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

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

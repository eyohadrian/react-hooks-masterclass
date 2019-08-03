import React, {useEffect, useMemo} from 'react';
import {withStyles} from "@material-ui/core";
import Cart from "./cart";
import {useAppContext} from "../context";
import ResumeScreen from "./resume-screen";
import style from './style';


const App = withStyles(style)(({classes, isNotSubmited}) => (
  <div className={classes.root}>
    {
      isNotSubmited
        ? <Cart />
        : <ResumeScreen/>
    }
  </div>
));

const AppControlled = () => {
  const {state} = useAppContext();
  const isNotSubmited = !state.submit;
  return useMemo(() => <App isNotSubmited={isNotSubmited}/>, [isNotSubmited]);
};

export default AppControlled;

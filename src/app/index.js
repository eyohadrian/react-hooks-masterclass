import React from 'react';
import {withStyles} from "@material-ui/core";
import Cart from "./cart";
import style from './style';


const App = withStyles(style)(({classes}) => {

  return (
    <div className={classes.root}>
      <Cart/>
    </div>
  );
});

export default App;

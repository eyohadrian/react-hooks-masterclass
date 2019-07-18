import {withStyles} from "@material-ui/core/index";
import React from 'react';

const style = {

};

const Item = withStyles(style)(({classes, name}) => {
  return (
    <li>{name}</li>
  )
});

export default Item;
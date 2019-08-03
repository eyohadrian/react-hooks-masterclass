import React from 'react';

const Item = React.memo(({name}) =>  <li>{name}</li>);

export default Item;
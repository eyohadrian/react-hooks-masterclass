import {useReducer} from "react";
import {CART_ADD_ELEMENT, CART_CLEAR_CART, APP_CHANGE_SCREEN} from "./actions";

const initialState = {
  submit: false,
  list: []
};

const reducer = (state = initialState, action) => {
  const newState = {...state};

  if (action.type === CART_ADD_ELEMENT) {
    newState.list = [action.name, ...state.list];
  }
  if (action.type === CART_CLEAR_CART) {
    if (state.list.length > 0) {
      newState.list = [];
    }
  }
  if (action.type === APP_CHANGE_SCREEN)
    newState.submit = !state.submit;
  return newState;
};

export default () => useReducer(reducer, initialState)
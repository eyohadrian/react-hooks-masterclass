import {createContext, useContext, useRef} from "react";
import React from 'react';

const ActionsDisplayContext = createContext();

export const ActionsDisplayContextProvider = ({children}) => {
  const references = {
    name: useRef()
  };

  return (
    <ActionsDisplayContext.Provider value={{references}} >
      {children}
    </ActionsDisplayContext.Provider>
  )
};

export const useActionsDisplayContext = () => useContext(ActionsDisplayContext);
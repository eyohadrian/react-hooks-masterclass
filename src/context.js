import React, {createContext, useContext} from "react";
import reducer from "./reducer";

const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [state, dispatch] = reducer();
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => useContext(AppContext);

import React, { createContext, useReducer } from "react";
import SubMenuReducer from "../reducers/sub-menu.reducer";

const AppContextProvider = ({ children }) => {
  const [subMenuItems, subMenuDispatch] = useReducer(SubMenuReducer, []);

  return (
    <AppContext.Provider
      value={{
        subMenuItems,
        subMenuDispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export const AppContext = createContext();

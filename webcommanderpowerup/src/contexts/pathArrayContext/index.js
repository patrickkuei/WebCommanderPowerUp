import React, { useContext, useReducer } from "react";
import { PathArrayContext, PathArrayDispatchContext } from "./PathArrayContext";

import { PathArrayReducer, getPathArrayDefault } from "./reducer";

export const usePathArrayContext = () => useContext(PathArrayContext);
export const usePathArrayDispatch = () => useContext(PathArrayDispatchContext);

export function PathArrayProvider(props) {
  const [pathArray, pathArrayDispatch] = useReducer(
    PathArrayReducer,
    getPathArrayDefault()
  );
  return (
    <PathArrayContext.Provider
      value={{
        pathArray,
      }}
    >
      <PathArrayDispatchContext.Provider
        value={{
          pathArrayDispatch,
        }}
      >
        {props.children}
      </PathArrayDispatchContext.Provider>
    </PathArrayContext.Provider>
  );
}

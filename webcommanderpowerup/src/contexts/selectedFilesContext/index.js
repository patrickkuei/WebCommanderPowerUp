import React, { useState, useContext, useReducer } from "react";
import {
  SelectedFilesContext,
  SelectedFilesDispatchContext,
} from "./SelectedFilesContext";

import { SelectedFilesReducer, getSelectedFilesDefault } from "./reducer";

export const useSelectedFilesContext = () => useContext(SelectedFilesContext);
export const useSelectedFilesDispatch = () =>
  useContext(SelectedFilesDispatchContext);

export function SelectedFileProvider(props) {
  const [selectedFiles, selectedFilesDispatch] = useReducer(
    SelectedFilesReducer,
    getSelectedFilesDefault()
  );

  return (
    <SelectedFilesContext.Provider
      value={{
        selectedFiles,
      }}
    >
      <SelectedFilesDispatchContext.Provider value={{ selectedFilesDispatch }}>
        {props.children}
      </SelectedFilesDispatchContext.Provider>
    </SelectedFilesContext.Provider>
  );
}

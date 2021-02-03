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
  const [selectedFilesState, selectedFilesDispatch] = useReducer(
    SelectedFilesReducer,
    getSelectedFilesDefault()
  );
  const selectedFiles = [];

  console.log("selectedFilesState", selectedFilesState);
  const [copiedFiles, setCopiedFiles] = useState([]);
  const [isCopied, setisCopied] = useState(false);

  const resetCopiedFiles = () => {
    setCopiedFiles([]);
  };

  return (
    <SelectedFilesContext.Provider
      value={{
        selectedFiles,
        copiedFiles,
        setCopiedFiles,
        resetCopiedFiles,
        isCopied,
        setisCopied,
      }}
    >
      <SelectedFilesDispatchContext.Provider value={{ selectedFilesDispatch }}>
        {props.children}
      </SelectedFilesDispatchContext.Provider>
    </SelectedFilesContext.Provider>
  );
}

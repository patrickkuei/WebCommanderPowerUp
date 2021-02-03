import React, { useContext, useReducer } from "react";
import { FilesInfoContext, FilesInfoDispatchContext } from "./FilesInfoContext";

import { CurrentFileReducer, getCurrentFolderDefault } from "./reducer";

export const useFilesContext = () => useContext(FilesInfoContext);
export const useFilesDispatch = () => useContext(FilesInfoDispatchContext);

export function FilesProvider(props) {
  const [currentFolder, currentFolderDispatch] = useReducer(
    CurrentFileReducer,
    getCurrentFolderDefault()
  );

  return (
    <FilesInfoContext.Provider
      value={{
        currentFolder,
      }}
    >
      <FilesInfoDispatchContext.Provider
        value={{
          currentFolderDispatch,
        }}
      >
        {props.children}
      </FilesInfoDispatchContext.Provider>
    </FilesInfoContext.Provider>
  );
}

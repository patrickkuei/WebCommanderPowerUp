import React, { useState, useContext, useReducer } from "react";

import {
  FilesInfoContext,
  FilesInfoDispatchContext,
} from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { PathArrayContext, PathArrayDispatchContext } from "./PathArrayContext";

import {
  CurrentFileReducer,
  getCurrentFolderDefault,
  PathArrayReducer,
  getPathArrayDefault,
} from "./Reducer";

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

export const useSelectedFilesContext = () => useContext(SelectedFilesContext);

export function SelectedFileProvider(props) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [copiedFiles, setCopiedFiles] = useState([]);
  const [isCopied, setisCopied] = useState(false);

  const resetSelecetedFiles = () => {
    setSelectedFiles([]);
  };
  const resetCopiedFiles = () => {
    setCopiedFiles([]);
  };

  return (
    <SelectedFilesContext.Provider
      value={{
        selectedFiles,
        setSelectedFiles,
        resetSelecetedFiles,
        copiedFiles,
        setCopiedFiles,
        resetCopiedFiles,
        isCopied,
        setisCopied,
      }}
    >
      {props.children}
    </SelectedFilesContext.Provider>
  );
}

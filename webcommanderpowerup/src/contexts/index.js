import React, { useState, useContext, useReducer } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { CreateFilesContext } from "./CreateFilesContext";
import filesAPI from "../api/filesAPI";
import {
  CurrentFileReducer,
  getCurrentFolderDefault,
  PathArrayReducer,
  getPathArrayDefault,
} from "./Reducer";
import { fileActions } from "./actions";
import { PathArrayContext, PathArrayDispatchContext } from "./PathArrayContext";

export const useFilesContext = () => useContext(FilesInfoContext);

export const usePathArrayContext = () => useContext(PathArrayContext);
export const usePathArrayDispatch = () => useContext(PathArrayDispatchContext);

export function FilesProvider(props) {
  const [pathArray, pathArrayDispatch] = useReducer(
    PathArrayReducer,
    getPathArrayDefault()
  );
  const [currentFolder, currentFolderDispatch] = useReducer(
    CurrentFileReducer,
    getCurrentFolderDefault()
  );

  const fetchFolderFiles = async (id) => {
    currentFolderDispatch(fileActions.dataLoaing());
    const { data } = await filesAPI.getFilesById(id);
    currentFolderDispatch(fileActions.updateCurrentFolder(data));
  };

  const deleteFile = async (id) => {
    await filesAPI.deleteFileById(id);
    currentFolderDispatch(fileActions.deleteFile(id));
  };

  return (
    <FilesInfoContext.Provider
      value={{
        currentFolder,
        fetchFolderFiles,
        deleteFile,
      }}
    >
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
    </FilesInfoContext.Provider>
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

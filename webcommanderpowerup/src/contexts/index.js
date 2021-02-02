import React, { useState, useContext, useRef, useReducer } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { CreateFilesContext } from "./CreateFilesContext";
import filesAPI from "../api/filesAPI";
import { CurrentFileReducer, getCurrentFolderDefault } from "./Reducer";
import actions from "./actions";

export const useFilesContext = () => useContext(FilesInfoContext);

export function FilesProvider(props) {
  const [pathArray, setPathArray] = useState([{ id: "root", name: "root" }]);
  const [currentFolder, currentFolderDispatch] = useReducer(
    CurrentFileReducer,
    getCurrentFolderDefault()
  );

  const fetchFolderFiles = async (id) => {
    currentFolderDispatch(actions.dataLoaing());
    const { data } = await filesAPI.getFilesById(id);
    currentFolderDispatch(actions.updateCurrentFolder(data));
  };

  const deleteFile = async (id) => {
    await filesAPI.deleteFileById(id);
    currentFolderDispatch(actions.deleteFile(id));
  };

  return (
    <FilesInfoContext.Provider
      value={{
        currentFolder,
        fetchFolderFiles,
        deleteFile,
        pathArray,
        setPathArray,
      }}
    >
      {props.children}
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

export const useCreateFilesContext = () => useContext(CreateFilesContext);

export function CreateFilesProvider(props) {
  const [newFolderState, setNewFolderState] = useState({
    isValid: false,
    value: "",
  });
  const [newFiles, setNewFiles] = useState([]);

  const newFilesRef = useRef(null);

  const resetNewFolderState = () => {
    setNewFolderState({
      isValid: false,
      value: "",
    });
  };
  const resetFile = () => {
    setNewFiles([]);
    newFilesRef.current.value = "";
  };

  return (
    <CreateFilesContext.Provider
      value={{
        newFolderState,
        setNewFolderState,
        newFiles,
        setNewFiles,
        newFilesRef,
        resetNewFolderState,
        resetFile,
      }}
    >
      {props.children}
    </CreateFilesContext.Provider>
  );
}

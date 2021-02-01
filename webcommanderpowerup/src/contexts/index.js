import React, { useState, useContext, useRef } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { CreateFilesContext } from "./CreateFilesContext";

export const useFilesContext = () => useContext(FilesInfoContext);

export function FilesProvider(props) {
  const [currentFolder, setCurrentFolder] = useState({
    isLoading: true,
    id: "root",
    children: [],
  });
  const [pathArray, setPathArray] = useState([{ id: "root", name: "root" }]);

  return (
    <FilesInfoContext.Provider
      value={{
        currentFolder,
        setCurrentFolder,
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

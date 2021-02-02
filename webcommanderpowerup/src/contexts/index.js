import React, { useState, useContext, useRef } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { CreateFilesContext } from "./CreateFilesContext";
import filesAPI from "../api/filesAPI";

export const useFilesContext = () => useContext(FilesInfoContext);

export function FilesProvider(props) {
  const [currentFolder, setCurrentFolder] = useState({
    isLoading: true,
    id: "",
    children: [],
  });
  const [pathArray, setPathArray] = useState([{ id: "root", name: "root" }]);

  const fetchFolderFiles = async (id) => {
    setCurrentFolder((prev) => {
      return { ...prev, isLoading: true };
    });

    const { data } = await filesAPI.getFilesById(id);

    setCurrentFolder(() => {
      return {
        isLoading: false,
        id: data.id,
        children: data.children,
      };
    });
  };

  return (
    <FilesInfoContext.Provider
      value={{
        fetchFolderFiles,
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

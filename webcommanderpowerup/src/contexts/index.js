import React, { useState, useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

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

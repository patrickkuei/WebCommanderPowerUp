import React, { useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

export const useFilesContext = () => useContext(FilesInfoContext);

export function FilesProvider(props) {
  return (
    <FilesInfoContext.Provider value={props.value}>
      {props.children}
    </FilesInfoContext.Provider>
  );
}

export const useSelectedFilesContext = () => useContext(SelectedFilesContext);

export function SelectedFileProvider(props) {
  return (
    <SelectedFilesContext.Provider value={props.value}>
      {props.children}
    </SelectedFilesContext.Provider>
  );
}

import React, { useContext, useEffect, useState } from "react";
import MainView from "./MainView";
import Toolbar from "./Toolbar";
import BreadCrumb from "./BreadCrumb";
import { FilesInfoContext } from "../contexts/FilesInfoContext";
import filesAPI from "../api/filesAPI";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function Main() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { currentFolderId } = useContext(FilesInfoContext);
  const [childrenFiles, setChildrenFiles] = useState([]);
  const [pathArray, setPathArray] = useState([]);

  const fetchFolderFiles = () => {
    const { data } = filesAPI.getFilesByFolderId(currentFolderId);
    const { id, name, fullPath, children } = data;
    setChildrenFiles(children);
    setPathArray(fullPath.split("\\"));
  };

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolderId]);

  return (
    <div className="home-page__right-div col-10">
      <SelectedFilesContext.Provider
        value={{ selectedFiles, setSelectedFiles }}
      >
        <BreadCrumb pathArray={pathArray} setPathArray={setPathArray} />
        <Toolbar />
        <MainView childrenFiles={childrenFiles} />
      </SelectedFilesContext.Provider>
    </div>
  );
}

export default Main;

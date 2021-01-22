import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import FolderView from "./FolderView";
import BreadCrumb from "./BreadCrumb";
import LoadingPage from "./LoadingPage";

import filesAPI from "../api/filesAPI";

function HomePage() {
  const [folderHierarchy, setFolderHierarchy] = useState({
    isLoading: true,
    folders: [],
  });
  const [currentFolder, setCurrentFolder] = useState({
    isLoading: true,
    id: "root",
    children: [],
  });
  const [pathArray, setPathArray] = useState([
    { id: "root", name: "我的電腦" },
  ]);

  const fetchFolderHierarchy = async () => {
    const { data } = await filesAPI.getFolderHierarchy();

    setFolderHierarchy({
      isLoading: false,
      folders: data,
    });
  };

  const fetchFolderFiles = async () => {
    const { data } = await filesAPI.getFilesById(currentFolder.id);

    setCurrentFolder(() => {
      return {
        isLoading: false,
        id: data.id,
        children: data.children,
      };
    });
  };

  const initialize = () => {
    fetchFolderHierarchy();
    fetchFolderFiles();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    setCurrentFolder((prev) => {
      return { ...prev, isLoading: true };
    });
    fetchFolderFiles();
  }, [currentFolder.id]);

  return (
    <Fragment>
      {folderHierarchy.isLoading && currentFolder.isLoading ? (
        <LoadingPage />
      ) : (
        <FilesInfoContext.Provider
          value={{
            folderHierarchy,
            setFolderHierarchy,
            currentFolder,
            setCurrentFolder,
            pathArray,
            setPathArray,
          }}
        >
          <div className="home-page-container container-fluid border overflow-hidden">
            <BreadCrumb />
            <FolderView />
          </div>
        </FilesInfoContext.Provider>
      )}
    </Fragment>
  );
}

export default HomePage;

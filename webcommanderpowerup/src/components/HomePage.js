import React, { useState, useEffect, Fragment } from "react";

import FolderView from "./FolderView";
import BreadCrumb from "./BreadCrumb";
import LoadingPage from "./LoadingPage";

import { FilesProvider } from "../contexts";
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
    fetchFolderFiles();
  }, [currentFolder.id]);

  return (
    <Fragment>
      {!folderHierarchy.isLoading && currentFolder.isLoading ? (
        <LoadingPage />
      ) : (
        <FilesProvider
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
        </FilesProvider>
      )}
    </Fragment>
  );
}

export default HomePage;

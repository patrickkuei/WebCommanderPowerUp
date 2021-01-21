import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import LeftNavbar from "./LeftNavbar";
import FolderView from "./FolderView";
import LoadingPage from "./LoadingPage";

import filesAPI from "../api/filesAPI";
import axios from "axios";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [folderHierarchy, setFolderHierarchy] = useState({
    folders: [],
  });
  const [currentFolder, setCurrentFolder] = useState({
    id: "root",
    children: [],
  });
  const [pathArray, setPathArray] = useState([
    { id: "root", name: "我的電腦" },
  ]);

  const fetchFolderHierarchy = async () => {
    const { data } = await filesAPI.getFolderHierarchy();

    setFolderHierarchy({
      folders: data,
    });
  };

  const fetchFolderFiles = async () => {
    const { data } = await filesAPI.getFilesById(currentFolder.id);

    data &&
      setCurrentFolder(() => {
        return {
          id: data.id,
          children: data.children,
        };
      });
  };

  const initialize = () => {
    fetchFolderHierarchy();
    fetchFolderFiles();
    setIsLoaded(true);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolder.id]);

  return (
    <Fragment>
      {isLoaded ? (
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
            <div className="row h-100">
              <LeftNavbar />
              <FolderView />
            </div>
          </div>
        </FilesInfoContext.Provider>
      ) : (
        <LoadingPage />
      )}
    </Fragment>
  );
}

export default HomePage;

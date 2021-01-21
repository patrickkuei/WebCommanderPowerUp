import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import LeftNavbar from "./LeftNavbar";
import FolderView from "./FolderView";
import LoadingPage from "./LoadingPage";

import filesAPI from "../api/filesAPI";
import axios from "axios";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [foldersInfo, setFoldersInfo] = useState({
    folders: [],
  });
  const [currentFolderInfo, setCurrentFolderInfo] = useState({
    currentFolderId: "root",
    pathArray: ["我的電腦"],
    childrenFiles: [],
  });

  const [idPathArray, setIdPathArray] = useState(["root"]);

  const fetchFolders = async () => {
    const { data } = await filesAPI.getFoldersInfo();
    setFoldersInfo({
      folders: data,
    });
  };

  const fetchFolderFiles = async () => {
    const { data } = await filesAPI.getFilesByFolderId(
      currentFolderInfo.currentFolderId
    );
    data &&
      setCurrentFolderInfo(() => {
        return {
          currentFolderId: data.id,
          pathArray: [data.name],
          childrenFiles: data.children,
        };
      });
  };

  const initialize = () => {
    fetchFolders();
    fetchFolderFiles();
    setIsLoaded(true);
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolderInfo.currentFolderId]);

  return (
    <Fragment>
      {isLoaded ? (
        <FilesInfoContext.Provider
          value={{
            foldersInfo,
            setFoldersInfo,
            currentFolderInfo,
            setCurrentFolderInfo,
            idPathArray,
            setIdPathArray,
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

import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import LeftNavbar from "./LeftNavbar";
import Main from "./Main";

import filesAPI from "../api/filesAPI";

function HomePage() {
  const [foldersInfo, setFoldersInfo] = useState({
    isLoaded: false,
    folders: [],
  });

  const [currentFolderInfo, setCurrentFolderInfo] = useState({
    currentFolderId: "C10CB365-44AA-4946-B8C5-FD4C8D007863",
    pathArray: [],
    childrenFiles: [],
  });

  const [idPathArray, setIdPathArray] = useState([
    "C10CB365-44AA-4946-B8C5-FD4C8D007863",
  ]);

  const fetchFolders = () => {
    const { data } = filesAPI.getFoldersInfo();
    setFoldersInfo({
      isLoaded: true,
      folders: data,
    });
  };

  const fetchFolderFiles = () => {
    const { data } = filesAPI.getFilesByFolderId(
      currentFolderInfo.currentFolderId
    );
    setCurrentFolderInfo((prev) => {
      return {
        ...prev,
        pathArray: data.fullPath.split("\\"),
        childrenFiles: data.children,
      };
    });
  };

  const initialize = () => {
    fetchFolders();
    fetchFolderFiles();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolderInfo.currentFolderId]);

  return (
    <Fragment>
      {foldersInfo.isLoaded ? (
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
            <div className="home-page row">
              <LeftNavbar />
              <Main />
            </div>
          </div>
        </FilesInfoContext.Provider>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </Fragment>
  );
}

export default HomePage;

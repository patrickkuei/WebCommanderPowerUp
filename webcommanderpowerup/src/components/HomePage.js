import React, { useState, useEffect, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import LeftNavbar from "./LeftNavbar";
import FolderView from "./FolderView";

import filesAPI from "../api/filesAPI";
import ContentLoader, { Facebook } from "react-content-loader";

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
              <FolderView />
            </div>
          </div>
        </FilesInfoContext.Provider>
      ) : (
        <ContentLoader
          speed={3}
          width={1535}
          height={505}
          viewBox="0 0 1535 505"
          backgroundColor="#f3f3f3"
          foregroundColor="#d6d6d6"
        >
          <rect x="11" y="10" rx="3" ry="3" width="260" height="500" />
          <rect x="300" y="10" rx="3" ry="3" width="1220" height="80" />
          <rect x="300" y="114" rx="3" ry="3" width="1220" height="391" />
        </ContentLoader>
      )}
    </Fragment>
  );
}

export default HomePage;

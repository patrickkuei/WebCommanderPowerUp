import React, { useState, useEffect, useReducer, Fragment } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

import LeftNavbar from "./LeftNavbar";
import Main from "./Main";

import filesAPI from "../api/FilesAPI";
import { fileReducer } from "../reducers/FileReducer";
import { FILE_ACTIONS } from "../action/FileAction";

function HomePage() {
  const [foldersInfo, setFoldersInfo] = useState({
    isLoaded: false,
    folders: [],
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

  const initialCurrentFolder = {
    folderId: "C10CB365-44AA-4946-B8C5-FD4C8D007863",
    pathArray: [],
    childrenFiles: [],
  };

  const [currentFolderState, currentFolderDispatch] = useReducer(
    fileReducer,
    initialCurrentFolder
  );

  const fetchFolderFiles = () => {
    const { data } = filesAPI.getFilesByFolderId(currentFolderState.folderId);
    currentFolderDispatch({
      type: FILE_ACTIONS.FETCH_FOLDER_FILES,
      payload: data,
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
  }, [currentFolderState.folderId]);

  // console.log("currentFolderState", currentFolderState.folderId);
  // console.log("idPathArray", idPathArray);
  return (
    <Fragment>
      {foldersInfo.isLoaded ? (
        <FilesInfoContext.Provider
          value={{
            foldersInfo,
            setFoldersInfo,
            currentFolderState,
            currentFolderDispatch,
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

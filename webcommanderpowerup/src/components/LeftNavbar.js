import React, { useEffect, useState } from "react";

import LoadingLeftBar from "./loadingPage/LoadingLeftBar";

import {
  useFilesContext,
  useFilesDispatch,
} from "../contexts/filesInfoContext/";
import { usePathArrayDispatch } from "../contexts/pathArrayContext";
import { useSelectedFilesDispatch } from "../contexts/selectedFilesContext";
import pathActions from "../contexts/pathArrayContext/actions";

import filesAPI from "../api/filesAPI";
import { fetchFolderFiles, resetSelecetedFiles } from "../utilities";

function LeftNavbar() {
  const { currentFolder } = useFilesContext();
  const { currentFolderDispatch } = useFilesDispatch();
  const { selectedFilesDispatch } = useSelectedFilesDispatch();
  const { pathArrayDispatch } = usePathArrayDispatch();

  const [folderHierarchy, setFolderHierarchy] = useState({
    isLoading: true,
    root: {},
  });

  const fetchFolderHierarchy = async () => {
    const { data } = await filesAPI.getFolderHierarchy();
    setFolderHierarchy({
      isLoading: false,
      root: data,
    });
  };

  const handleFolderClick = (clickedFolderId, e) => {
    fetchFolderFiles(currentFolderDispatch, clickedFolderId);
    pathArrayDispatch(pathActions.getNewPathArray(e.target.dataset));
    resetSelecetedFiles(selectedFilesDispatch);
  };

  useEffect(() => {
    fetchFolderHierarchy();
  }, []);

  const renderFolders = (folder, idArray, nameArray) => {
    const resultIdArr = [...idArray];
    const resultNameArr = [...nameArray];
    resultIdArr.push([folder.id]);
    resultNameArr.push([folder.name]);

    return (
      <ul key={folder.id} className="navbar-nav">
        <li key={folder.id} className="nav-item">
          <button
            type="button"
            className="btn btn-dark"
            data-idpath={resultIdArr.join("/")}
            data-namepath={resultNameArr.join("/")}
            onClick={(e) => handleFolderClick(folder.id, e)}
            disabled={currentFolder.isLoading}
          >
            {folder.name}
          </button>
          {folder.children &&
            folder.children.map((child) =>
              renderFolders(child, resultIdArr, resultNameArr)
            )}
        </li>
      </ul>
    );
  };

  if (folderHierarchy.isLoading) {
    return <LoadingLeftBar />;
  } else {
    return (
      <nav className="left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {renderFolders(folderHierarchy.root, [], [])}
        </div>
      </nav>
    );
  }
}

export default LeftNavbar;

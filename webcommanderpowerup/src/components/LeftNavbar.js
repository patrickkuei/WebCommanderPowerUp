import React, { useEffect, useState } from "react";

import {
  useFilesContext,
  usePathArrayDispatch,
  useSelectedFilesContext,
} from "../contexts";
import filesAPI from "../api/filesAPI";
import LoadingLeftBar from "./loadingPage/LoadingLeftBar";
import { pathActions } from "../contexts/actions";

function LeftNavbar() {
  const { currentFolder, fetchFolderFiles } = useFilesContext();
  const { resetSelecetedFiles } = useSelectedFilesContext();
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
    fetchFolderFiles(clickedFolderId);
    pathArrayDispatch(pathActions.getNewPathArray(e.target.dataset));
    resetSelecetedFiles();
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

import React, { useEffect, useState } from "react";

import { useFilesContext } from "../contexts";
import filesAPI from "../api/filesAPI";
import LoadingLeftBar from "./loadingPage/LoadingLeftBar";

function LeftNavbar() {
  const { currentFolder, setCurrentFolder, setPathArray } = useFilesContext();

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

  useEffect(() => {
    fetchFolderHierarchy();
  }, []);

  const renderFolders = (folder, idArray, nameArray) => {
    const resultIdArr = [...idArray];
    const resultNameArr = [...nameArray];
    resultIdArr.push([folder.id]);
    resultNameArr.push([folder.name]);

    return (
      <ul className="navbar-nav">
        <li key={folder.id} className="nav-item">
          <button
            type="button"
            class="btn btn-dark"
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

  const handleFolderClick = (clickedFolderId, e) => {
    setCurrentFolder((prev) => {
      return {
        ...prev,
        id: clickedFolderId,
      };
    });

    setPathArray(getNewPathArray(e));
  };

  const getNewPathArray = (e) => {
    const result = [];
    const idArray = e.target.dataset.idpath.split("/");
    const nameArray = e.target.dataset.namepath.split("/");

    for (let i = 0; i < idArray.length; i++) {
      result.push({ id: idArray[i], name: nameArray[i] });
    }

    return result;
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

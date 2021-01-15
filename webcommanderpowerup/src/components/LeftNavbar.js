import React, { useContext } from "react";
import { FILE_ACTIONS } from "../action/FileAction";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function LeftNavbar() {
  const { foldersInfo, currentFolderDispatch, setIdPathArray } = useContext(
    FilesInfoContext
  );

  const decorateFolders = (files, array) => {
    return (
      <ul className="navbar-nav">
        {files.map((file) => {
          const resultArr = [...array];
          resultArr.push(file.id);

          return (
            <li key={file.id} className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                data-idpath={resultArr.join("/")}
                onClick={(e) => handleFolderClick(file.id, e)}
              >
                {file.name}
              </a>
              {file.children && decorateFolders(file.children, resultArr)}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleFolderClick = (folderId, e) => {
    currentFolderDispatch({
      type: FILE_ACTIONS.TO_OTHER_FOLDER,
      payload: folderId,
    });

    setIdPathArray(e.target.dataset.idpath.split("/"));
  };

  return (
    // Bootstrap LeftNavbar
    <div className="home-page__left-bar col-2 border">
      <nav className="home-page__left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {decorateFolders(foldersInfo.folders, [])}
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

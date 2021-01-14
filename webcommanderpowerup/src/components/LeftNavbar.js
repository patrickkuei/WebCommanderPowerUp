import React, { useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function LeftNavbar() {
  const {
    filesInfo,
    setFilesInfo,
    currentFolderId,
    setCurrentFolderId,
  } = useContext(FilesInfoContext);

  const decorateFolders = (files) => {
    return (
      <ul className="navbar-nav">
        {files.map((file, index) => {
          return (
            <li key={index.toString() + file.id} className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => handleFolderClick(file.id)}
              >
                {file.name}
              </a>
              {file.children && decorateFolders(file.children)}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleFolderClick = (folderId) => {
    setCurrentFolderId(folderId);
  };

  return (
    // Bootstrap LeftNavbar
    <div className="home-page__left-bar col-2 border">
      <nav className="home-page__left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {decorateFolders(filesInfo.files)}
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

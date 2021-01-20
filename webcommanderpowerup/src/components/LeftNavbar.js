import React, { useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function LeftNavbar() {
  const { foldersInfo, setCurrentFolderInfo, setIdPathArray } = useContext(
    FilesInfoContext
  );

  const renderFolders = (files, array) => {
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
              {file.children && renderFolders(file.children, resultArr)}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleFolderClick = (folderId, e) => {
    setCurrentFolderInfo((prev) => {
      return {
        ...prev,
        currentFolderId: folderId,
      };
    });

    setIdPathArray(e.target.dataset.idpath.split("/"));
  };

  return (
    // Bootstrap LeftNavbar
    <div className="left-bar col-2 border">
      <nav className="left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">
          {renderFolders(foldersInfo.folders, [])}
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

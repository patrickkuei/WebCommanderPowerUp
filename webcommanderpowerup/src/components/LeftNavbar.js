import React from "react";

import { useFilesContext } from "../contexts";

function LeftNavbar() {
  const { folderHierarchy, setCurrentFolder, setPathArray } = useFilesContext();

  const renderFolders = (files, idArray, nameArray) => {
    return (
      <ul className="navbar-nav">
        {files.map((file) => {
          const resultIdArr = [...idArray];
          const resultNameArr = [...nameArray];
          resultIdArr.push([file.id]);
          resultNameArr.push([file.name]);

          return (
            <li key={file.id} className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                data-idpath={resultIdArr.join("/")}
                data-namepath={resultNameArr.join("/")}
                onClick={(e) => handleFolderClick(file.id, e)}
              >
                {file.name}
              </a>
              {file.children &&
                renderFolders(file.children, resultIdArr, resultNameArr)}
            </li>
          );
        })}
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

  return (
    // Bootstrap LeftNavbar
    <nav className="left-bar__navigation navbar navbar-dark bg-dark">
      <div className="container-fluid">
        {renderFolders(folderHierarchy.folders, [], [])}
      </div>
    </nav>
  );
}

export default LeftNavbar;

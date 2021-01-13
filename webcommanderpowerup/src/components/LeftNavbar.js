import React, { useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function LeftNavbar() {
  const { filesInfo, setFilesInfo } = useContext(FilesInfoContext);

  const decorateFiles = (files) => {
    return (
      <ul className="navbar-nav">
        {files.map((file) => {
          return (
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {file.name}
              </a>
              {file.subfolders && decorateFiles(file.subfolders)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    // Bootstrap LeftNavbar
    <div className="main__left-bar col-2 border">
      <nav className="main__left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">{decorateFiles(filesInfo.files)}</div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

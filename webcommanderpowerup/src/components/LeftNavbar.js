import React, { useContext } from "react";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function LeftNavbar() {
  const { filesInfo, setFilesInfo } = useContext(FilesInfoContext);

  const decoratedFolders = filesInfo.files.map((file, index) => {
    return (
      <li className="nav-item" key={index.toString() + file}>
        <a className="nav-link active" aria-current="page" href="#">
          {file}
        </a>
      </li>
    );
  });

  return (
    // Bootstrap LeftNavbar
    <div className="main__left-bar col-2 border">
      <nav className="main__left-bar__navigation navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">{decoratedFolders}</ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

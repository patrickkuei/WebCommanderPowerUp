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
    <div className="col-2 border" style={{ padding: "0" }}>
      <nav className="navbar navbar-dark bg-dark" style={{ height: "100%" }}>
        <div className="container-fluid">
          <ul className="navbar-nav">{decoratedFolders}</ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

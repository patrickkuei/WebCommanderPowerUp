import React, { useContext } from "react";

import { PathContext } from "../contexts/PathContext";

function LeftNavbar() {
  const pathContext = useContext(PathContext);
  const { path, setPath, files } = pathContext;

  const decoratedFolders = files.map((file, index) => {
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
    <div className="col-2 border">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">{decoratedFolders}</ul>
        </div>
      </nav>
    </div>
  );
}

export default LeftNavbar;

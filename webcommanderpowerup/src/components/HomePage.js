import React, { useState } from "react";

import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";

import { PathContext } from "../contexts/PathContext";
import fileAPI from "../api/filesAPI";
import Main from "./Main";

function HomePage() {
  const fileInfo = fileAPI.getFileInfo();
  const files = fileInfo.files;
  const [path, setPath] = useState(fileInfo.path);

  return (
    <PathContext.Provider value={{ path, setPath, files }}>
      <div
        className="container-fluid border overflow-hidden"
        style={{ height: "70vh" }}
      >
        <BreadCrumb />
        <div className="row" style={{ height: "90%" }}>
          <LeftNavbar />
          <Main />
        </div>
      </div>
    </PathContext.Provider>
  );
}

export default HomePage;

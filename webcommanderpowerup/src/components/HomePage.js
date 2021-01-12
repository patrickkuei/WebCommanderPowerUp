import React, { useState, useEffect } from "react";

import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";

import { PathContext } from "../contexts/PathContext";
import fileAPI from "../api/filesAPI";
import Main from "./Main";

function HomePage() {
  const [files, setFiles] = useState([]);
  const [pathArray, setPathArray] = useState([]);

  const initialFilesInfo = () => {
    const filesInfo = fileAPI.getFilesInfo();
    setFiles(filesInfo.files);
    setPathArray(filesInfo.path.split("\\"));
  };

  useEffect(() => {
    initialFilesInfo();
  }, []);

  return (
    <PathContext.Provider value={{ pathArray, setPathArray, files }}>
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

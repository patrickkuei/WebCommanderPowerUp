import React, { useState, useEffect, Fragment } from "react";

import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";

import { FilesInfoContext } from "../contexts/FilesInfoContext";
import fileAPI from "../api/filesAPI";
import Main from "./Main";

function HomePage() {
  const [filesInfo, setFilesInfo] = useState({
    isLoaded: false,
    files: [],
    path: "",
    pathArray: [],
  });

  const initialFilesInfo = () => {
    const res = fileAPI.getFilesInfo();
    setFilesInfo({
      isLoaded: true,
      files: res.files,
      path: res.path,
      pathArray: res.path.split("\\"),
    });
  };

  useEffect(() => {
    initialFilesInfo();
  }, []);

  return (
    <Fragment>
      {filesInfo.isLoaded ? (
        <FilesInfoContext.Provider value={{ filesInfo, setFilesInfo }}>
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
        </FilesInfoContext.Provider>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </Fragment>
  );
}

export default HomePage;

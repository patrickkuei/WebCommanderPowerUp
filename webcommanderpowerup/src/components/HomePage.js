import React, { useState } from "react";
import BreadCrumb from "./BreadCrumb";
import LeftNavbar from "./LeftNavbar";
import MainView from "./MainView";
import Toolbar from "./Toolbar";

import { PathContext } from "../contexts/PathContext";
import { PATH } from "../constants/constans";

function HomePage() {
  const [path, setPath] = useState(PATH);
  return (
    <PathContext.Provider value={{ path: path, setPath: setPath }}>
      <div className="container-fluid border" style={{ height: "70vh" }}>
        <BreadCrumb />
        <div className="row" style={{ height: "90%" }}>
          <LeftNavbar />
          <div className="col-10 border">
            <Toolbar />
            <MainView />
          </div>
        </div>
      </div>
    </PathContext.Provider>
  );
}

export default HomePage;

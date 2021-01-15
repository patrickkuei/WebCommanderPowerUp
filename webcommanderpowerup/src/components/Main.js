import React, { useContext, useEffect, useState } from "react";
import MainView from "./MainView";
import Toolbar from "./Toolbar";
import BreadCrumb from "./BreadCrumb";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function Main() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  return (
    <div className="home-page__right-div col-10">
      <SelectedFilesContext.Provider
        value={{ selectedFiles, setSelectedFiles }}
      >
        <BreadCrumb />
        <Toolbar />
        <MainView />
      </SelectedFilesContext.Provider>
    </div>
  );
}

export default Main;

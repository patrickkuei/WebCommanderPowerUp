import React, { useState } from "react";
import MainView from "./MainView";
import Toolbar from "./Toolbar";

import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function Main() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  return (
    <div className="col-10 border">
      <SelectedFilesContext.Provider
        value={{ selectedFiles, setSelectedFiles }}
      >
        <Toolbar />
        <MainView />
      </SelectedFilesContext.Provider>
    </div>
  );
}

export default Main;

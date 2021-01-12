import React, { useState } from "react";
import MainView from "./MainView";
import Toolbar from "./Toolbar";

import { FilesContext } from "../contexts/FilesContext";

function Main() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  return (
    <div className="col-10 border">
      <FilesContext.Provider value={{ selectedFiles, setSelectedFiles }}>
        <Toolbar />
        <MainView />
      </FilesContext.Provider>
    </div>
  );
}

export default Main;

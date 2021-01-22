import React, { useContext, useEffect, useState } from "react";
import FolderList from "./FolderList";
import LeftNavbar from "./LeftNavbar";
import Toolbar from "./Toolbar";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function FolderView() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="folder-view row">
      <SelectedFilesContext.Provider
        value={{ selectedFiles, setSelectedFiles }}
      >
        <div className="left-bar col-2">
          <LeftNavbar />
        </div>
        <div className="col-10">
          <Toolbar isDetail={isDetail} setIsDetail={setIsDetail} />
          <FolderList isDetail={isDetail} />
        </div>
      </SelectedFilesContext.Provider>
    </div>
  );
}

export default FolderView;

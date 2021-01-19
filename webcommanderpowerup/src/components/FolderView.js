import React, { useContext, useEffect, useState } from "react";
import FolderList from "./FolderList";
import Toolbar from "./Toolbar";
import BreadCrumb from "./BreadCrumb";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function FolderView() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="folder-view col-10 h-100">
      <SelectedFilesContext.Provider
        value={{ selectedFiles, setSelectedFiles }}
      >
        <BreadCrumb />
        <Toolbar isDetail={isDetail} setIsDetail={setIsDetail} />
        <FolderList isDetail={isDetail} />
      </SelectedFilesContext.Provider>
    </div>
  );
}

export default FolderView;

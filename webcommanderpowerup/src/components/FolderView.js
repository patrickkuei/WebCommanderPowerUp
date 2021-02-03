import React, { useState } from "react";

import FileList from "./FileList";
import LeftNavbar from "./LeftNavbar";
import Toolbar from "./Toolbar";
import { SelectedFileProvider } from "../contexts/selectedFilesContext";

function FolderView() {
  const [isDetail, setIsDetail] = useState(false);

  const toggleDetailView = () => {
    setIsDetail((prev) => !prev);
  };

  return (
    <SelectedFileProvider>
      <div className="folder-view row">
        <div className="left-bar col-2">
          <LeftNavbar />
        </div>
        <div className="col-10">
          <Toolbar isDetail={isDetail} toggleDetailView={toggleDetailView} />
          <FileList isDetail={isDetail} />
        </div>
      </div>
    </SelectedFileProvider>
  );
}

export default FolderView;

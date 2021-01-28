import React, { useState, useEffect } from "react";

import FileList from "./FileList";
import LeftNavbar from "./LeftNavbar";
import Toolbar from "./Toolbar";

import { SelectedFileProvider, useFilesContext } from "../contexts";

function FolderView() {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <div className="folder-view row">
      <SelectedFileProvider>
        <div className="left-bar col-2">
          <LeftNavbar />
        </div>
        <div className="col-10">
          <Toolbar isDetail={isDetail} setIsDetail={setIsDetail} />
          <FileList isDetail={isDetail} />
        </div>
      </SelectedFileProvider>
    </div>
  );
}

export default FolderView;

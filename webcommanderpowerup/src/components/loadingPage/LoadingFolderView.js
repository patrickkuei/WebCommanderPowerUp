import React from "react";

import LoadingLeftBar from "./LoadingLeftBar";
import LoadingToolBar from "./LoadingToolBar";
import LoadingFolderList from "./LoadingFolderList";

export default function LoadingFolderView() {
  return (
    <div className="loading-folder-view row">
      <div className="border col-2 h-100  bg-dark">
        <LoadingLeftBar />
      </div>
      <div className="border col-10 h-100">
        <LoadingToolBar />
        <LoadingFolderList />
      </div>
    </div>
  );
}

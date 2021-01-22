import React from "react";

import LoadingFolderView from "./loadingPage/LoadingFolderView";
import LoadingLeftBar from "./loadingPage/LoadingLeftBar";

function LoadingPage() {
  return (
    <div className="loading-page-container container-fluid border">
      <div className="row h-100">
        <LoadingLeftBar />
        <LoadingFolderView />
      </div>
    </div>
  );
}

export default LoadingPage;

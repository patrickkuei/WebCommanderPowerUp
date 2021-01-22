import React from "react";

import LoadingBreadCrumb from "./loadingPage/LoadingBreadCrumb";
import LoadingFolderView from "./loadingPage/LoadingFolderView";

function LoadingPage() {
  return (
    <div className="loading-page-container container-fluid border">
      <LoadingBreadCrumb />
      <LoadingFolderView />
    </div>
  );
}

export default LoadingPage;

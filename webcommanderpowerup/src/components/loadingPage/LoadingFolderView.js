import React from "react";
import ContentLoader from "react-content-loader";
import LoadingBreadCrumb from "./LoadingBreadCrumb";
import LoadingFolderList from "./LoadingFolderList";
import LoadingToolBar from "./LoadingToolBar";

export default function LoadingFolderView() {
  return (
    <div className="border col-10 h-100">
      <LoadingBreadCrumb />
      <LoadingToolBar />
      <LoadingFolderList />
    </div>
  );
}

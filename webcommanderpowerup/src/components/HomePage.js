import React from "react";

import FolderView from "./FolderView";
import BreadCrumb from "./BreadCrumb";

import { FilesProvider } from "../contexts";

function HomePage() {
  return (
    <FilesProvider>
      <div className="home-page-container container-fluid border overflow-hidden">
        <BreadCrumb />
        <FolderView />
      </div>
    </FilesProvider>
  );
}

export default HomePage;

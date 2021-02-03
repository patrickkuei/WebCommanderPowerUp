import React from "react";

import FolderView from "./FolderView";
import BreadCrumb from "./BreadCrumb";

import { FilesProvider, PathArrayProvider } from "../contexts";

function HomePage() {
  return (
    <FilesProvider>
      <PathArrayProvider>
        <div className="home-page-container container-fluid border overflow-hidden">
          <BreadCrumb />
          <FolderView />
        </div>
      </PathArrayProvider>
    </FilesProvider>
  );
}

export default HomePage;

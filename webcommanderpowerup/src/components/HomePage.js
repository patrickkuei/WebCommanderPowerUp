import React, { useState, useEffect, Fragment } from "react";

import FolderView from "./FolderView";
import BreadCrumb from "./BreadCrumb";
import LoadingPage from "./LoadingPage";

import { FilesProvider } from "../contexts";
import filesAPI from "../api/filesAPI";

function HomePage() {
  const [currentFolder, setCurrentFolder] = useState({
    isLoading: true,
    id: "root",
    children: [],
  });
  const [pathArray, setPathArray] = useState([
    { id: "root", name: "我的電腦" },
  ]);

  const fetchFolderFiles = async () => {
    const { data } = await filesAPI.getFilesById(currentFolder.id);

    setCurrentFolder(() => {
      return {
        isLoading: false,
        id: data.id,
        children: data.children,
      };
    });
  };

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolder.id]);

  return (
    <FilesProvider
      value={{
        currentFolder,
        setCurrentFolder,
        pathArray,
        setPathArray,
      }}
    >
      <div className="home-page-container container-fluid border overflow-hidden">
        <BreadCrumb />
        <FolderView />
      </div>
    </FilesProvider>
  );
}

export default HomePage;

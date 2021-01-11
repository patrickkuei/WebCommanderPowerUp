import React, { useContext } from "react";

import MainViewItem from "./MainViewItem";
import { PathContext } from "../contexts/PathContext";
import foldersAPI from "../api/foldersAPI";

function MainView() {
  //TODO: get folders data by path here
  const _folders = [
    "folder1",
    "folder2",
    "folder3",
    "folder4",
    "folder5",
    "folder6",
    "folder7",
    "folder8",
    "folder9",
  ];

  const pathContext = useContext(PathContext);
  const { path, setPath } = pathContext;
  const folders = foldersAPI.getFoldersByPath(path);

  return (
    <div className="row overflow-auto" style={{ height: "90%" }}>
      {_folders.map((folder, index) => (
        <MainViewItem key={index} folder={folder} />
      ))}
    </div>
  );
}

export default MainView;

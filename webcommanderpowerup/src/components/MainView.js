import React, { useContext } from "react";

import MainViewItem from "./MainViewItem";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function MainView(props) {
  const { currentFolderState } = useContext(FilesInfoContext);
  const { childrenFiles } = currentFolderState;
  return (
    <div className="main__main-view row border-bottom overflow-auto">
      {childrenFiles.map((file) => (
        <MainViewItem key={file.id} file={file} />
      ))}
    </div>
  );
}

export default MainView;

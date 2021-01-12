import React, { useContext } from "react";

import MainViewItem from "./MainViewItem";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function MainView() {
  const { filesInfo, setFilesInfo } = useContext(FilesInfoContext);
  return (
    <div className="row overflow-auto" style={{ height: "90%" }}>
      {filesInfo.files.map((file, index) => (
        <MainViewItem key={index.toString() + file} file={file} />
      ))}
    </div>
  );
}

export default MainView;

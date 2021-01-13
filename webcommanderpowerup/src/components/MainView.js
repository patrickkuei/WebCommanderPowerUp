import React, { useContext, useEffect, useState } from "react";

import MainViewItem from "./MainViewItem";
import { FilesInfoContext } from "../contexts/FilesInfoContext";
import filesAPI from "../api/filesAPI";

function MainView() {
  const { currentFolderId } = useContext(FilesInfoContext);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const response = filesAPI.getFilesByFolderId(currentFolderId);
    setFiles(response.files);
  }, [currentFolderId]);

  return (
    <div className="main__main-view row overflow-auto">
      {files.map((file, index) => (
        <MainViewItem key={index.toString() + file.id} file={file} />
      ))}
    </div>
  );
}

export default MainView;

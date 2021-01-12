import React, { useContext } from "react";

import MainViewItem from "./MainViewItem";
import { PathContext } from "../contexts/PathContext";

function MainView() {
  const pathContext = useContext(PathContext);
  const { files } = pathContext;

  return (
    <div className="row overflow-auto" style={{ height: "90%" }}>
      {files.map((file, index) => (
        <MainViewItem key={index} file={file} />
      ))}
    </div>
  );
}

export default MainView;

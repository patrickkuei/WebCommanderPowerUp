import React, { useContext, useEffect, useState } from "react";

import MainViewItem from "./MainViewItem";

function MainView(props) {
  const { childrenFiles } = props;
  return (
    <div className="main__main-view row border-bottom overflow-auto">
      {childrenFiles.map((file, index) => (
        <MainViewItem key={index.toString() + file.id} file={file} />
      ))}
    </div>
  );
}

export default MainView;

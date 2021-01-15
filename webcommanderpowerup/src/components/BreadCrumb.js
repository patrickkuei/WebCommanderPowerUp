import React, { useContext, useEffect, useState } from "react";
import { FILE_ACTIONS } from "../action/FileAction";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function BreadCrumb() {
  const { currentFolderState, currentFolderDispatch, idPathArray } = useContext(
    FilesInfoContext
  );

  const decoratedPath = currentFolderState.pathArray.map((pathPart, index) => {
    return (
      <li key={index.toString() + pathPart} className="breadcrumb-item">
        <a href="#" onClick={() => handlePathLinkClick(index)}>
          {pathPart}
        </a>
      </li>
    );
  });

  const handlePathLinkClick = (index) => {
    const targetPath = {
      index: index,
      idPathArray: idPathArray,
    };
    currentFolderDispatch({
      type: FILE_ACTIONS.TO_PREV_FOLDER,
      payload: targetPath,
    });
  };

  useEffect(() => {
    console.log("asdasd");
  }, []);
  return (
    // Bootstrap breadcrumb
    <div className="breadcrumb-screen row border-bottom">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb-screen__list breadcrumb">{decoratedPath}</ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;

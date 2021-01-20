import React, { useContext } from "react";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function BreadCrumb() {
  const { currentFolderInfo, setCurrentFolderInfo, idPathArray } = useContext(
    FilesInfoContext
  );

  const handlePathLinkClick = (index) => {
    setCurrentFolderInfo((prev) => {
      return {
        ...prev,
        currentFolderId: idPathArray[index],
      };
    });
  };

  const renderedPath = currentFolderInfo.pathArray.map((pathPart, index) => {
    return (
      <li key={index.toString() + pathPart} className="breadcrumb-item">
        <a href="#" onClick={() => handlePathLinkClick(index)}>
          {pathPart}
        </a>
      </li>
    );
  });

  return (
    // Bootstrap breadcrumb
    <div className="breadcrumb-screen row border-bottom">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb-screen__list breadcrumb">{renderedPath}</ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;

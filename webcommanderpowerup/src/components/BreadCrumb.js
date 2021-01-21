import React, { useContext } from "react";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function BreadCrumb() {
  const { setCurrentFolder, pathArray, setPathArray } = useContext(
    FilesInfoContext
  );

  const handlePathLinkClick = (index) => {
    setCurrentFolder((prev) => {
      return {
        ...prev,
        id: pathArray[index].id,
      };
    });
    setPathArray((prev) => prev.slice(0, index + 1));
  };
  const renderedPath = pathArray.map((pathPart, index) => {
    return (
      <li key={pathPart.id} className="breadcrumb-item">
        <a href="#" onClick={() => handlePathLinkClick(index)}>
          {pathPart.name}
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

import React from "react";

import { useFilesContext } from "../contexts";

function BreadCrumb() {
  const {
    currentFolder,
    setCurrentFolder,
    pathArray,
    setPathArray,
  } = useFilesContext();

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
        <button
          type="button"
          class="btn btn-outline-dark btn-sm"
          onClick={() => handlePathLinkClick(index)}
          disabled={currentFolder.isLoading}
        >
          {pathPart.name}
        </button>
      </li>
    );
  });

  return (
    <div className="breadcrumb-screen row align-items-center justify-content-center border-bottom">
      <div className="col-8 border rounded shadow-sm">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-screen__list breadcrumb">{renderedPath}</ol>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;

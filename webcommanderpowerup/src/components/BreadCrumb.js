import React from "react";

import {
  useFilesContext,
  usePathArrayContext,
  usePathArrayDispatch,
} from "../contexts";
import { pathActions } from "../contexts/actions";

function BreadCrumb() {
  const { currentFolder, fetchFolderFiles } = useFilesContext();
  const { pathArray } = usePathArrayContext();
  const { pathArrayDispatch } = usePathArrayDispatch();

  const handlePathLinkClick = (index) => {
    fetchFolderFiles(pathArray[index].id);
    pathArrayDispatch(pathActions.slicePath(index));
  };
  const renderedPath = pathArray.map((pathPart, index) => {
    return (
      <li key={pathPart.id} className="breadcrumb-item">
        <button
          type="button"
          className="btn btn-outline-dark btn-sm"
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

import React from "react";

import {
  useFilesContext,
  useFilesDispatch,
  usePathArrayContext,
  usePathArrayDispatch,
} from "../contexts";
import { fileActions, pathActions } from "../contexts/actions";

import filesAPI from "../api/filesAPI";

function BreadCrumb() {
  const { currentFolder } = useFilesContext();
  const { currentFolderDispatch } = useFilesDispatch();
  const { pathArray } = usePathArrayContext();
  const { pathArrayDispatch } = usePathArrayDispatch();

  const fetchFolderFiles = async (id) => {
    currentFolderDispatch(fileActions.dataLoaing());
    const { data } = await filesAPI.getFilesById(id);
    currentFolderDispatch(fileActions.updateCurrentFolder(data));
  };

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

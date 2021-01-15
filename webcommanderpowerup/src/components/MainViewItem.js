import React, { useContext, useState } from "react";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function MainViewItem(props) {
  const { file } = props;
  const { selectedFiles, setSelectedFiles } = useContext(SelectedFilesContext);
  const {
    currentFolderInfo,
    setCurrentFolderInfo,
    idPathArray,
    setIdPathArray,
  } = useContext(FilesInfoContext);

  const handleCheckBoxClick = (e, fileId) => {
    if (e.target.checked) {
      setSelectedFiles((prev) => [...prev, fileId]);
    } else {
      setSelectedFiles((prev) => {
        return prev.filter((selectedFile) => selectedFile !== fileId);
      });
    }
  };

  const handleFolderCardDbClick = (folderId) => {
    setIdPathArray([...idPathArray, folderId]);
    setCurrentFolderInfo((prev) => {
      return {
        ...prev,
        currentFolderId: folderId,
      };
    });
  };

  return (
    // Bootstrap card
    <div
      className="col-3 card"
      onDoubleClick={() => handleFolderCardDbClick(file.id)}
    >
      <input
        className="main-view-item__checkbox"
        onChange={(e) => handleCheckBoxClick(e, file.id)}
        type="checkbox"
      />
      <div className="main-view-item__content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          fill="currentColor"
          className="main-view-item__content__picture bi bi-folder"
          viewBox="0 0 16 16"
        >
          <path d="M.54 3.87L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
        </svg>
        <div className="main-view-item__content__picture-name card-body text-center">
          <h5 className="card-title">{file.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default MainViewItem;

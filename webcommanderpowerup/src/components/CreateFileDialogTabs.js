import React from "react";
import PropTypes from "prop-types";

export default function CreateFileDialogTabs(props) {
  const {
    isFolder,
    toggleIsFolder,
    resetNewFolderState,
    resetFile,
  } = props.value;

  const handleFolderTabClick = () => {
    resetFile();
    toggleIsFolder();
  };

  const handleFileTabClick = () => {
    resetNewFolderState();
    toggleIsFolder();
  };

  CreateFileDialogTabs.propTypes = {
    isFolder: PropTypes.bool,
    toggleIsFolder: PropTypes.func,
    resetNewFolderState: PropTypes.func,
    resetFile: PropTypes.func,
  };
  return (
    <div className="modal-header nav-tabs">
      <ul className="nav nav-tab">
        <li className="nav-item">
          <a
            className={isFolder ? "nav-link active" : "nav-link"}
            aria-current="page"
            onClick={handleFolderTabClick}
          >
            Folder
          </a>
        </li>
        <li className="nav-item">
          <a
            className={!isFolder ? "nav-link active" : "nav-link"}
            onClick={handleFileTabClick}
          >
            File
          </a>
        </li>
      </ul>
    </div>
  );
}

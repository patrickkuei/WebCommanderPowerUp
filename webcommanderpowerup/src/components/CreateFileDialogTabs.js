import React from "react";
import PropTypes from "prop-types";

export default function CreateFileDialogTabs(props) {
  const { isFolder, setIsFolder, resetFolderState } = props;

  const handleFolderTabClick = () => {
    setIsFolder(true);
  };

  const handleFileTabClick = () => {
    resetFolderState();
    setIsFolder(false);
  };

  CreateFileDialogTabs.propTypes = {
    isFolder: PropTypes.bool,
    setIsFolder: PropTypes.func,
    resetFolderState: PropTypes.func,
  };
  return (
    <div className="modal-header nav-tabs">
      <ul class="nav nav-tab">
        <li class="nav-item">
          <a
            class={isFolder ? "nav-link active" : "nav-link"}
            aria-current="page"
            onClick={handleFolderTabClick}
          >
            Folder
          </a>
        </li>
        <li class="nav-item">
          <a
            class={!isFolder ? "nav-link active" : "nav-link"}
            onClick={handleFileTabClick}
          >
            File
          </a>
        </li>
      </ul>
    </div>
  );
}

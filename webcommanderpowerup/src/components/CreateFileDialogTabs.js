import React from "react";
import PropTypes from "prop-types";
import { useCreateFilesContext } from "../contexts";

export default function CreateFileDialogTabs(props) {
  const { isFolder, setIsFolder } = props;

  const { resetNewFolderState, resetFile } = useCreateFilesContext();

  const handleFolderTabClick = () => {
    resetFile();
    setIsFolder(true);
  };

  const handleFileTabClick = () => {
    resetNewFolderState();
    setIsFolder(false);
  };

  CreateFileDialogTabs.propTypes = {
    isFolder: PropTypes.bool,
    setIsFolder: PropTypes.func,
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

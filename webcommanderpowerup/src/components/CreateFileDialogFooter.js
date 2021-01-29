import React from "react";
import PropTypes from "prop-types";

import { useFilesContext } from "../contexts";

import filesAPI from "../api/filesAPI";

export default function CreateFileDialogFooter(props) {
  const {
    isFolder,
    setIsFolder,
    newFolderState,
    resetFolderState,
    resetFile,
    newFileRef,
    setIsShowed,
  } = props;
  const { currentFolder } = useFilesContext();

  const handleCreateFileClick = () => {
    isFolder
      ? createFile(currentFolder.id, {}, { name: newFolderState.value })
      : createFile(
          currentFolder.id,
          {
            name: newFileRef.current.files[0].name,
            size: newFileRef.current.files[0].size,
          },
          {}
        );

    resetFolderState();
  };

  const createFile = async (destFolderId, items, folders) => {
    await filesAPI.createFileByData(destFolderId, items, folders);
  };

  const handleCloseClick = () => {
    resetFolderState();
    resetFile();
    setIsFolder(true);
    setIsShowed(false);
  };

  CreateFileDialogFooter.propTypes = {
    isFolder: PropTypes.bool,
    setIsFolder: PropTypes.func,
    newFolderState: PropTypes.object,
    resetFolderState: PropTypes.func,
    resetFile: PropTypes.func,
    newFileRef: PropTypes.object,
    setIsShowed: PropTypes.func,
  };

  return (
    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCloseClick}
      >
        Close
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCreateFileClick}
        disabled={
          !newFolderState.isValid
          // || newFileRef.current.files.length === 0
        }
      >
        Create Files
      </button>
    </div>
  );
}

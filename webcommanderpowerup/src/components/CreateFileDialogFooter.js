import React from "react";
import PropTypes from "prop-types";

import { useCreateFilesContext, useFilesContext } from "../contexts";

import filesAPI from "../api/filesAPI";

export default function CreateFileDialogFooter(props) {
  const { isFolder, setIsFolder, setIsShowed } = props;
  const { currentFolder } = useFilesContext();
  const {
    newFolderState,
    newFiles,
    newFilesRef,
    resetNewFolderState,
    resetFile,
  } = useCreateFilesContext();

  const handleCreateFileClick = () => {
    if (isFolder) {
      createFile(currentFolder.id, [], [{ name: newFolderState.value }]);
      resetNewFolderState();
    } else {
      const [newFilesLength, newFiles] = [newFilesRef.current.files.length, []];
      for (let i = 0; i < newFilesLength; i++) {
        newFiles.push({
          name: newFilesRef.current.files[i].name,
          size: newFilesRef.current.files[i].size,
        });
      }
      console.log("newFilesRef", newFilesRef.current.files);
      createFile(currentFolder.id, newFiles, []);
      resetFile();
    }
  };

  const createFile = async (destFolderId, items, folders) => {
    await filesAPI.createFileByData(destFolderId, items, folders);
  };

  const handleCloseClick = () => {
    if (isFolder) {
      resetNewFolderState();
    } else {
      resetFile();
    }
    setIsFolder(true);
    setIsShowed(false);
  };

  CreateFileDialogFooter.propTypes = {
    isFolder: PropTypes.bool,
    setIsFolder: PropTypes.func,
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
        disabled={!newFolderState.isValid && newFiles.length === 0}
      >
        Create Files
      </button>
    </div>
  );
}

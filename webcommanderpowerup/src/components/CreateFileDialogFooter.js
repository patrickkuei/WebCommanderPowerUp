import React from "react";
import PropTypes from "prop-types";

import { useFilesContext } from "../contexts/filesInfoContext/";

import filesAPI from "../api/filesAPI";

export default function CreateFileDialogFooter(props) {
  const {
    isFolder,
    toggleIsFolder,
    toggleShowDialog,
    newFolderState,
    newFiles,
    newFilesRef,
    resetNewFolderState,
    resetFile,
  } = props.value;
  const { currentFolder } = useFilesContext();

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
    toggleIsFolder();
    toggleShowDialog();
  };

  CreateFileDialogFooter.propTypes = {
    isFolder: PropTypes.bool,
    toggleIsFolder: PropTypes.func,
    toggleShowDialog: PropTypes.func,
    newFolderState: PropTypes.object,
    newFiles: PropTypes.array,
    newFilesRef: PropTypes.object,
    resetNewFolderState: PropTypes.func,
    resetFile: PropTypes.func,
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

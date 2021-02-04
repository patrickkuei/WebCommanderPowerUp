import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import CreateFileDialogBody from "./CreateFileDialogBody";
import CreateFileDialogFooter from "./CreateFileDialogFooter";
import CreateFileDialogTabs from "./CreateFileDialogTabs";

function CreateFileDialog(props) {
  const { toggleShowDialog } = props;

  const [isFolder, setIsFolder] = useState(true);
  const [newFolderState, setNewFolderState] = useState({
    isValid: false,
    value: "",
  });
  const [newFiles, setNewFiles] = useState([]);
  const newFilesRef = useRef(null);

  const updateNewFolderState = (newState) => {
    setNewFolderState(newState);
  };

  const updateNewFiles = (newState) => {
    setNewFiles(newState);
  };

  const resetNewFolderState = () => {
    setNewFolderState({
      isValid: false,
      value: "",
    });
  };

  const resetFile = () => {
    setNewFiles([]);
    newFilesRef.current.value = "";
  };

  const toggleIsFolder = () => {
    setIsFolder((prev) => !prev);
  };

  CreateFileDialog.propTypes = {
    toggleShowDialog: PropTypes.func,
  };
  return (
    <div className="show-modal modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title">Create File</h5>
          </div>
          <CreateFileDialogTabs
            value={{
              isFolder,
              toggleIsFolder,
              resetNewFolderState,
              resetFile,
            }}
          />
          <CreateFileDialogBody
            value={{
              isFolder,
              newFolderState,
              updateNewFolderState,
              newFiles,
              updateNewFiles,
              newFilesRef,
            }}
          />
          <CreateFileDialogFooter
            value={{
              isFolder,
              toggleIsFolder,
              toggleShowDialog,
              newFolderState,
              newFiles,
              newFilesRef,
              resetNewFolderState,
              resetFile,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateFileDialog;

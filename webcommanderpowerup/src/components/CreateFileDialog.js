import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import CreateFileDialogBody from "./CreateFileDialogBody";
import CreateFileDialogFooter from "./CreateFileDialogFooter";
import CreateFileDialogTabs from "./CreateFileDialogTabs";

function CreateFileDialog(props) {
  const { isShowed, setIsShowed } = props;
  const [isFolder, setIsFolder] = useState(true);
  const [newFolderState, setNewFolderState] = useState({
    isValid: false,
    value: "",
  });
  const newFileRef = useRef(null);

  const resetFolderState = () => {
    setNewFolderState({
      isValid: false,
      value: "",
    });
  };
  const resetFile = () => {
    // newFileRef.current.value = "";
  };

  CreateFileDialog.propTypes = {
    isShowed: PropTypes.bool,
    setIsShowed: PropTypes.func,
  };
  return (
    <div className={isShowed ? "show-modal modal" : "modal"} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title">Create File</h5>
          </div>
          <CreateFileDialogTabs
            isFolder={isFolder}
            setIsFolder={setIsFolder}
            resetFolderState={resetFolderState}
          />
          <CreateFileDialogBody
            isFolder={isFolder}
            newFolderState={newFolderState}
            setNewFolderState={setNewFolderState}
            newFileRef={newFileRef}
          />
          <CreateFileDialogFooter
            isFolder={isFolder}
            setIsFolder={setIsFolder}
            newFolderState={newFolderState}
            newFileRef={newFileRef}
            resetFolderState={resetFolderState}
            resetFile={resetFile}
            setIsShowed={setIsShowed}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateFileDialog;

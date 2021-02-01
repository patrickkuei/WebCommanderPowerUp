import React, { useState } from "react";
import PropTypes from "prop-types";

import CreateFileDialogBody from "./CreateFileDialogBody";
import CreateFileDialogFooter from "./CreateFileDialogFooter";
import CreateFileDialogTabs from "./CreateFileDialogTabs";
import { CreateFilesProvider } from "../contexts";

function CreateFileDialog(props) {
  const { isShowed, setIsShowed } = props;
  const [isFolder, setIsFolder] = useState(true);

  CreateFileDialog.propTypes = {
    isShowed: PropTypes.bool,
    setIsShowed: PropTypes.func,
  };
  return (
    <CreateFilesProvider>
      <div className={isShowed ? "show-modal modal" : "modal"} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content shadow">
            <div className="modal-header">
              <h5 className="modal-title">Create File</h5>
            </div>
            <CreateFileDialogTabs
              isFolder={isFolder}
              setIsFolder={setIsFolder}
            />
            <CreateFileDialogBody isFolder={isFolder} />
            <CreateFileDialogFooter
              isFolder={isFolder}
              setIsFolder={setIsFolder}
              setIsShowed={setIsShowed}
            />
          </div>
        </div>
      </div>
    </CreateFilesProvider>
  );
}

export default CreateFileDialog;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";
import filesAPI from "../api/filesAPI";

function Toolbar(props) {
  const { isDetail, setIsDetail } = props;
  const { selectedFiles } = useSelectedFilesContext();
  const { currentFolder, setCurrentFolder } = useFilesContext();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleDetailSwitch = () => {
    setIsDetail((prev) => !prev);
  };

  const handleCopy = () => {
    console.log(`COPY THESE FILES ${selectedFiles}`);
  };
  const handlePaste = () => {
    console.log("paste");
  };
  const handleDelete = () => {
    if (selectedFiles.length === 1) {
      deleteFile(selectedFiles[0]);
    } else {
      console.log("can only delete single file");
    }
  };

  const deleteFile = async (fileId) => {
    const deleteResult = await filesAPI.deleteFileById(fileId);
    console.log("deleteResult", deleteResult);
    setCurrentFolder((prev) => {
      return {
        ...prev,
        children: prev.children.filter((file) => file.id !== fileId),
      };
    });
  };

  useEffect(() => {
    setBtnDisabled(!selectedFiles.length > 0 && currentFolder.isLoading);
  }, [selectedFiles]);

  Toolbar.propTypes = {
    isDetail: PropTypes.bool,
    setIsDetail: PropTypes.func,
  };

  return (
    <div className="tool-bar row">
      <div className="col-12">
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleCopy}
          disabled={btnDisabled}
        >
          Copy
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handlePaste}
          disabled={btnDisabled}
        >
          Paste
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleDelete}
          disabled={btnDisabled}
        >
          Delete
        </button>
        <button
          type="button"
          className={
            isDetail
              ? "tool-bar__button btn-sm btn btn-primary float-right"
              : "tool-bar__button btn-sm btn btn-outline-primary float-right"
          }
          onClick={handleDetailSwitch}
          disabled={currentFolder.isLoading}
        >
          detail
        </button>
      </div>
    </div>
  );
}

export default Toolbar;

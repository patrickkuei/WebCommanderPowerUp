import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";
import filesAPI from "../api/filesAPI";

function Toolbar(props) {
  const { isDetail, setIsDetail } = props;
  const {
    selectedFiles,
    resetSelecetedFiles,
    copiedFiles,
    setCopiedFiles,
    resetCopiedFiles,
    isCopied,
    setisCopied,
  } = useSelectedFilesContext();
  const { currentFolder, setCurrentFolder } = useFilesContext();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleCreateClick = () => {
    console.log("create file!!!");
  };

  const handleCopyClick = () => {
    const selectedFileIds = selectedFiles.map((file) => file.id);
    setCopiedFiles([...selectedFileIds]);
    resetSelecetedFiles();
  };
  const handlePasteClick = () => {
    pasteFiles(copiedFiles);
    console.log("copiedFiles", copiedFiles);
    resetCopiedFiles();
  };

  const pasteFiles = async (files) => {
    await filesAPI.pasteFilesById(currentFolder, files);
  };

  const handleDeleteClick = () => {
    if (selectedFiles.length === 1) {
      deleteFile(selectedFiles[0].id);
    } else {
      console.log("can only delete single file");
    }
    resetSelecetedFiles();
  };

  const deleteFile = async (fileId) => {
    await filesAPI.deleteFileById(fileId);

    setCurrentFolder((prev) => {
      return {
        ...prev,
        children: prev.children.filter((file) => file.id !== fileId),
      };
    });
  };

  const handleResetClick = () => {
    resetSelecetedFiles();
  };

  const handleDetailSwitch = () => {
    setIsDetail((prev) => !prev);
  };

  useEffect(() => {
    setBtnDisabled(currentFolder.isLoading || selectedFiles.length === 0);
  }, [selectedFiles.length, currentFolder.isLoading]);

  useEffect(() => {
    setisCopied(copiedFiles.length > 0);
  }, [copiedFiles.length]);

  Toolbar.propTypes = {
    isDetail: PropTypes.bool,
    setIsDetail: PropTypes.func,
  };

  return (
    <div className="tool-bar row">
      <div className="col-12">
        <button
          className="tool-bar__button btn btn-outline-primary btn-sm"
          disabled={!btnDisabled}
          onClick={handleCreateClick}
        >
          Create
        </button>
        <button
          type="button"
          className={
            isCopied
              ? "tool-bar__button btn btn-primary btn-sm"
              : "tool-bar__button btn btn-outline-primary btn-sm"
          }
          onClick={handleCopyClick}
          disabled={btnDisabled}
        >
          Copy
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handlePasteClick}
          disabled={!isCopied}
        >
          Paste
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleDeleteClick}
          disabled={btnDisabled}
        >
          Delete
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleResetClick}
          disabled={btnDisabled}
        >
          Reset Select
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

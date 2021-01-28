import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";
import filesAPI from "../api/filesAPI";

function Toolbar(props) {
  const { isDetail, setIsDetail } = props;
  const {
    selectedFiles,
    setSelectedFiles,
    resetSelecetedFiles,
    setDefaultCheck,
    copiedFiles,
    setCopiedFiles,
    resetCopiedFiles,
    isCopied,
    setisCopied,
  } = useSelectedFilesContext();
  const { currentFolder, setCurrentFolder } = useFilesContext();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleDetailSwitch = () => {
    setIsDetail((prev) => !prev);
  };

  const handleCopy = () => {
    setCopiedFiles([...selectedFiles]);
    resetSelecetedFiles();
  };
  const handlePaste = () => {
    resetCopiedFiles();
  };

  const pasteFiles = async () => {
    const items = [];
    const folders = [];
    let tempSelectedFiles = [...selectedFiles];

    while (tempSelectedFiles.length > 0) {
      if (tempSelectedFiles[0].type === 1) {
        folders.push(tempSelectedFiles.shift());
      } else {
        items.push(tempSelectedFiles.shift());
      }
    }
    const newFiles = await filesAPI.pasteFilesById(
      currentFolder,
      items,
      folders
    );
  };

  const handleDelete = () => {
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

  const handleReset = () => {
    resetSelecetedFiles();
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
          type="button"
          className={
            isCopied
              ? "tool-bar__button btn btn-primary btn-sm"
              : "tool-bar__button btn btn-outline-primary btn-sm"
          }
          onClick={handleCopy}
          disabled={btnDisabled}
        >
          Copy
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handlePaste}
          disabled={!isCopied}
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
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleReset}
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

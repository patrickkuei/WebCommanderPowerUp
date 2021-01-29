import React from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";

import filesAPI from "../api/filesAPI";

export default function DeleteButton(props) {
  const { btnDisabled } = props;
  const { selectedFiles, resetSelecetedFiles } = useSelectedFilesContext();
  const { setCurrentFolder } = useFilesContext();

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

  DeleteButton.propTypes = {
    btnDisabled: PropTypes.bool,
  };

  return (
    <button
      type="button"
      className="tool-bar__button btn btn-outline-primary btn-sm"
      onClick={handleDeleteClick}
      disabled={btnDisabled}
    >
      Delete
    </button>
  );
}

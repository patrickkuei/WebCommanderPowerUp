import React from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";

import filesAPI from "../api/filesAPI";

export default function DeleteButton(props) {
  const { btnDisabled } = props;
  const { selectedFiles, resetSelecetedFiles } = useSelectedFilesContext();
  const { deleteFile } = useFilesContext();

  const handleDeleteClick = () => {
    if (selectedFiles.length === 1) {
      deleteFile(selectedFiles[0].id);
    } else {
      console.log("can only delete single file");
    }
    resetSelecetedFiles();
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

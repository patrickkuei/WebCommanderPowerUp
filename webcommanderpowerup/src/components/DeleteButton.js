import React from "react";
import PropTypes from "prop-types";

import { useFilesDispatch } from "../contexts/filesInfoContext/";
import {
  useSelectedFilesContext,
  useSelectedFilesDispatch,
} from "../contexts/selectedFilesContext";
import fileActions from "../contexts/filesInfoContext/actions";

import { resetSelecetedFiles } from "../utilities";

import filesAPI from "../api/filesAPI";

export default function DeleteButton(props) {
  const { btnDisabled } = props;
  const { selectedFiles } = useSelectedFilesContext();
  const { selectedFilesDispatch } = useSelectedFilesDispatch();
  const { currentFolderDispatch } = useFilesDispatch();

  const deleteFile = async (id) => {
    await filesAPI.deleteFileById(id);
    currentFolderDispatch(fileActions.deleteFile(id));
  };

  const handleDeleteClick = () => {
    if (selectedFiles.length === 1) {
      deleteFile(selectedFiles[0].id);
    } else {
      console.log("can only delete single file");
    }
    resetSelecetedFiles(selectedFilesDispatch);
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

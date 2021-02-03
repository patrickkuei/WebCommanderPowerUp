import React from "react";
import PropTypes from "prop-types";

import {
  useSelectedFilesContext,
  useSelectedFilesDispatch,
} from "../contexts/selectedFilesContext";

import { resetSelecetedFiles } from "../utilities";

export default function CopyButton(props) {
  const { btnDisabled, updateCopiedFiles, isCopied } = props;

  const { selectedFiles } = useSelectedFilesContext();

  const { selectedFilesDispatch } = useSelectedFilesDispatch();

  const handleCopyClick = () => {
    const selectedFileIds = selectedFiles.map((file) => file.id);
    updateCopiedFiles([...selectedFileIds]);
    resetSelecetedFiles(selectedFilesDispatch);
  };

  CopyButton.propTypes = {
    btnDisabled: PropTypes.bool,
    updateCopiedFiles: PropTypes.func,
    isCopied: PropTypes.bool,
  };
  return (
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
  );
}

import React from "react";
import PropTypes from "prop-types";

import {
  useSelectedFilesContext,
  useSelectedFilesDispatch,
} from "../contexts/selectedFilesContext";

import selectedFilesActions from "../contexts/selectedFilesContext/actions";

import { resetSelecetedFiles } from "../utilities";

export default function CopyButton(props) {
  const { btnDisabled } = props;

  const { selectedFiles, setCopiedFiles, isCopied } = useSelectedFilesContext();

  const { selectedFilesDispatch } = useSelectedFilesDispatch();

  const handleCopyClick = () => {
    const selectedFileIds = selectedFiles.map((file) => file.id);
    setCopiedFiles([...selectedFileIds]);
    resetSelecetedFiles(selectedFilesDispatch, selectedFilesActions);
  };

  CopyButton.propTypes = {
    btnDisabled: PropTypes.bool,
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

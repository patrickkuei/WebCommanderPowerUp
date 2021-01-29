import React from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext } from "../contexts";

export default function CopyButton(props) {
  const { btnDisabled } = props;

  const {
    selectedFiles,
    resetSelecetedFiles,
    setCopiedFiles,
    isCopied,
  } = useSelectedFilesContext();

  const handleCopyClick = () => {
    const selectedFileIds = selectedFiles.map((file) => file.id);
    setCopiedFiles([...selectedFileIds]);
    resetSelecetedFiles();
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

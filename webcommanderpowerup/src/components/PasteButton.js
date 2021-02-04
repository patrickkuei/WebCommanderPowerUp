import React from "react";
import PropTypes from "prop-types";
import { useFilesContext } from "../contexts/filesInfoContext/";

import { useSelectedFilesContext } from "../contexts/selectedFilesContext";

import filesAPI from "../api/filesAPI";

export default function PasteButton(props) {
  const { copiedFiles, isCopied, resetCopiedFiles } = props;
  const { currentFolder } = useFilesContext();
  const handlePasteClick = () => {
    pasteFiles(copiedFiles);
    resetCopiedFiles();
  };

  const pasteFiles = async (files) => {
    await filesAPI.pasteFilesById(currentFolder, files);
  };

  return (
    <button
      type="button"
      className="tool-bar__button btn btn-outline-primary btn-sm"
      onClick={handlePasteClick}
      disabled={!isCopied}
    >
      Paste
    </button>
  );
}

PasteButton.propTypes = {
  copiedFiles: PropTypes.array,
  isCopied: PropTypes.bool,
  resetCopiedFiles: PropTypes.func,
};

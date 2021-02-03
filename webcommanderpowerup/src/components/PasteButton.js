import React from "react";
import { useFilesContext } from "../contexts/filesInfoContext/";

import { useSelectedFilesContext } from "../contexts/selectedFilesContext";

import filesAPI from "../api/filesAPI";

export default function PasteButton() {
  const { copiedFiles, resetCopiedFiles, isCopied } = useSelectedFilesContext();
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

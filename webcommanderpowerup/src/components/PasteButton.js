import React from "react";
import { useSelectedFilesContext, useFilesContext } from "../contexts";

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

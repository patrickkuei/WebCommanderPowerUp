import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CreateButton from "./CreateButton";
import CopyButton from "./CopyButton";
import PasteButton from "./PasteButton";
import DeleteButton from "./DeleteButton";
import ResetSelectButton from "./ResetSelectButton";

import { useFilesContext } from "../contexts/filesInfoContext/";
import { useSelectedFilesContext } from "../contexts/selectedFilesContext";

function Toolbar(props) {
  const { isDetail, toggleDetailView } = props;
  const { selectedFiles } = useSelectedFilesContext();
  const { currentFolder } = useFilesContext();

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [copiedFiles, setCopiedFiles] = useState([]);
  const [isCopied, setIsCopied] = useState(false);

  const resetCopiedFiles = () => {
    setCopiedFiles([]);
  };

  const updateCopiedFiles = (newState) => {
    setCopiedFiles(newState);
  };

  const handleDetailSwitch = () => {
    toggleDetailView();
  };

  useEffect(() => {
    setBtnDisabled(currentFolder.isLoading || selectedFiles.length === 0);
  }, [selectedFiles.length, currentFolder.isLoading]);

  useEffect(() => {
    setIsCopied(copiedFiles.length > 0);
  }, [copiedFiles.length]);

  Toolbar.propTypes = {
    isDetail: PropTypes.bool,
    toggleDetailView: PropTypes.func,
  };

  return (
    <div className="tool-bar row">
      <div className="col-12">
        <CreateButton btnDisabled={btnDisabled} />
        <CopyButton
          btnDisabled={btnDisabled}
          updateCopiedFiles={updateCopiedFiles}
          isCopied={isCopied}
        />
        <PasteButton
          isCopied={isCopied}
          copiedFiles={copiedFiles}
          resetCopiedFiles={resetCopiedFiles}
        />
        <DeleteButton btnDisabled={btnDisabled} />
        <ResetSelectButton btnDisabled={btnDisabled} />
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

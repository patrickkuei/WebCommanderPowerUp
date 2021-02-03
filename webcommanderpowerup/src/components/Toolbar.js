import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useFilesContext } from "../contexts/filesInfoContext/";
import { useSelectedFilesContext } from "../contexts/selectedFilesContext";
import CreateButton from "./CreateButton";
import CopyButton from "./CopyButton";
import PasteButton from "./PasteButton";
import DeleteButton from "./DeleteButton";
import ResetSelectButton from "./ResetSelectButton";

function Toolbar(props) {
  const { isDetail, toggleDetailView } = props;
  const { selectedFiles, copiedFiles, setisCopied } = useSelectedFilesContext();
  const { currentFolder } = useFilesContext();

  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleDetailSwitch = () => {
    toggleDetailView();
  };

  useEffect(() => {
    setBtnDisabled(currentFolder.isLoading || selectedFiles.length === 0);
  }, [selectedFiles.length, currentFolder.isLoading]);

  useEffect(() => {
    setisCopied(copiedFiles.length > 0);
  }, [copiedFiles.length]);

  Toolbar.propTypes = {
    isDetail: PropTypes.bool,
    toggleDetailView: PropTypes.func,
  };

  return (
    <div className="tool-bar row">
      <div className="col-12">
        <CreateButton btnDisabled={btnDisabled} />
        <CopyButton btnDisabled={btnDisabled} />
        <PasteButton />
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

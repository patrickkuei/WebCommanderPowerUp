import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useSelectedFilesContext, useFilesContext } from "../contexts";

function Toolbar(props) {
  const { isDetail, setIsDetail } = props;
  const { selectedFiles } = useSelectedFilesContext();
  const { currentFolder } = useFilesContext();

  const [disabled, setDisabled] = useState(true);

  const handleCopy = () => {
    console.log(`COPY THESE FILES ${selectedFiles}`);
  };
  const handlePaste = () => {
    console.log("paste");
  };
  const handleDelete = () => {
    console.log(`DELETE THESE FILES ${selectedFiles}`);
  };

  const handleDetailSwitch = () => {
    setIsDetail((prev) => !prev);
  };

  useEffect(() => {
    setDisabled(!selectedFiles.length > 0 && currentFolder.isLoading);
  }, [selectedFiles]);

  Toolbar.propTypes = {
    isDetail: PropTypes.bool,
    setIsDetail: PropTypes.func,
  };

  return (
    <div className="tool-bar row">
      <div className="col-12">
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleCopy}
          disabled={disabled}
        >
          Copy
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handlePaste}
          disabled={disabled}
        >
          Paste
        </button>
        <button
          type="button"
          className="tool-bar__button btn btn-outline-primary btn-sm"
          onClick={handleDelete}
          disabled={disabled}
        >
          Delete
        </button>
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

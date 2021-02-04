import React from "react";
import PropTypes from "prop-types";
import { useSelectedFilesDispatch } from "../contexts/selectedFilesContext";

import { resetSelecetedFiles } from "../utilities";

export default function ResetSelectButton(props) {
  const { btnDisabled } = props;

  const { selectedFilesDispatch } = useSelectedFilesDispatch();

  const handleResetClick = () => {
    resetSelecetedFiles(selectedFilesDispatch);
  };

  return (
    <button
      type="button"
      className="tool-bar__button btn btn-outline-primary btn-sm"
      onClick={handleResetClick}
      disabled={btnDisabled}
    >
      Reset Select
    </button>
  );
}

ResetSelectButton.propTypes = {
  btnDisabled: PropTypes.bool,
};

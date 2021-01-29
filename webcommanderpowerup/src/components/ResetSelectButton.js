import React from "react";
import PropTypes from "prop-types";

export default function ResetSelectButton(props) {
  const { resetSelecetedFiles, btnDisabled } = props;

  const handleResetClick = () => {
    resetSelecetedFiles();
  };

  ResetSelectButton.propTypes = {
    resetSelecetedFiles: PropTypes.func,
    btnDisabled: PropTypes.bool,
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

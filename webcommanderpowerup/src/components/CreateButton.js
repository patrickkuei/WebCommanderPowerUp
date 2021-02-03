import React, { useState } from "react";
import PropTypes from "prop-types";

import CreateFileDialog from "./CreateFileDialog";

export default function CreateButton(props) {
  const { btnDisabled } = props;

  const [isShowed, setIsShowed] = useState(false);

  const toggleShowDialog = () => {
    setIsShowed((prev) => !prev);
  };

  const handleCreateClick = () => {
    toggleShowDialog();
  };

  CreateButton.propTypes = {
    btnDisabled: PropTypes.bool,
  };
  return (
    <>
      <button
        className="tool-bar__button btn btn-outline-primary btn-sm"
        disabled={!btnDisabled}
        onClick={handleCreateClick}
      >
        Create
      </button>

      <CreateFileDialog
        isShowed={isShowed}
        toggleShowDialog={toggleShowDialog}
      />
    </>
  );
}

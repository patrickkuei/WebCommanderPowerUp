import React, { useState } from "react";
import ReactDOM from "react-dom";
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

  const DialogPortal = () =>
    isShowed
      ? ReactDOM.createPortal(
          <CreateFileDialog toggleShowDialog={toggleShowDialog} />,
          document.body
        )
      : null;

  return (
    <>
      <button
        className="tool-bar__button btn btn-outline-primary btn-sm"
        disabled={!btnDisabled}
        onClick={handleCreateClick}
      >
        Create
      </button>

      <DialogPortal />
    </>
  );
}

CreateButton.propTypes = {
  btnDisabled: PropTypes.bool,
};

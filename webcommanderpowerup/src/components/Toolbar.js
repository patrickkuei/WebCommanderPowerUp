import React, { useContext, useState, useEffect } from "react";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function Toolbar() {
  const { selectedFiles, setSelectedFiles } = useContext(SelectedFilesContext);
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

  useEffect(() => {
    setDisabled(!selectedFiles.length > 0);
  }, [selectedFiles]);

  return (
    // Bootstrap Toolbar
    <div className="main__tool-bar border-bottom row">
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handleCopy}
        disabled={disabled}
      >
        Copy
      </button>
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handlePaste}
        disabled={disabled}
      >
        Paste
      </button>
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handleDelete}
        disabled={disabled}
      >
        Delete
      </button>
    </div>
  );
}

export default Toolbar;

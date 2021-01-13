import React, { useContext } from "react";
import { SelectedFilesContext } from "../contexts/SelectedFilesContext";

function Toolbar() {
  const { selectedFiles, setSelectedFiles } = useContext(SelectedFilesContext);

  const handleCopy = () => {
    console.log(`COPY THESE FILES ${selectedFiles}`);
  };
  const handlePaste = () => {
    console.log("paste");
  };
  const handleDelete = () => {
    console.log(`DELETE THESE FILES ${selectedFiles}`);
  };

  return (
    // Bootstrap Toolbar
    <div className="main__tool-bar">
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handleCopy}
      >
        Copy
      </button>
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handlePaste}
      >
        Paste
      </button>
      <button
        type="button"
        className="main__tool-bar__button btn btn-outline-primary btn-sm"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Toolbar;

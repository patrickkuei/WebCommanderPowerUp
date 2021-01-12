import React, { useContext } from "react";
import { FilesContext } from "../contexts/FilesContext";

function Toolbar() {
  const { selectedFiles, setSelectedFiles } = useContext(FilesContext);

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
    <div style={{ height: "10%" }}>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
        onClick={handleCopy}
      >
        Copy
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
        onClick={handlePaste}
      >
        Paste
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

export default Toolbar;

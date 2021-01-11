import React from "react";

function Toolbar() {
  return (
    // Bootstrap Toolbar
    <div style={{ height: "10%" }}>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
      >
        Copy
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
      >
        Paste
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm"
        style={{ margin: "6px 10px" }}
      >
        Delete
      </button>
    </div>
  );
}

export default Toolbar;

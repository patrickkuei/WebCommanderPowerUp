import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingToolBar() {
  return (
    <div className="loading-tool-bar border-bottom row">
      <div className="col-12">
        <button
          type="button"
          className="loading-tool-bar__button btn btn-outline-primary btn-sm"
          disabled
        >
          Copy
        </button>
        <button
          type="button"
          className="loading-tool-bar__button btn btn-outline-primary btn-sm"
          disabled
        >
          Paste
        </button>
        <button
          type="button"
          className="loading-tool-bar__button btn btn-outline-primary btn-sm"
          disabled
        >
          Delete
        </button>
        <button
          type="button"
          className="loading-tool-bar__button btn btn-outline-primary btn-sm float-right"
          disabled
        >
          detail
        </button>
      </div>
    </div>
  );
}

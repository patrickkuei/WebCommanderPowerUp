import React, { useState } from "react";

import filesAPI from "../api/filesAPI";

function CreateFileDialog(props) {
  const { isShowed, setIsShowed } = props;

  const [isFolder, setIsFolder] = useState(true);

  const [inputValue, setInputValue] = useState({
    isValid: false,
    value: "",
  });

  const handleFolderTabClick = () => {
    setIsFolder(true);
  };

  const handleFileTabClick = () => {
    setIsFolder(false);
  };

  const handleFolderNameInput = (e) => {
    setInputValue({
      isValid: handleFolderNameValidation(e.target.value),
      value: e.target.value,
    });
  };

  const handleFolderNameValidation = (text) => {
    const reg = /.*[\\\/:\*\?"<>\|].*/;
    return text.length > 0 && !reg.test(text);
  };

  const handleCreateFileClick = () => {
    filesAPI.createFileByData();
  };

  const handleCloseClick = () => {
    resetInputValue();
    setIsShowed(false);
  };

  const resetInputValue = () => {
    setInputValue({
      isValid: false,
      value: "",
    });
  };

  const dialogBody = isFolder ? (
    <div className="modal-body">
      <form>
        <div class="mb-3">
          <label for="new-folder-name" class="form-label">
            The Name of New Folder You Want to Create
          </label>
          <div className="col-6">
            <input
              type="text"
              class="form-control"
              id="newFolderName"
              value={inputValue.value}
              onChange={(e) => handleFolderNameInput(e)}
            />
          </div>
          {inputValue.value.length > 0 ? (
            !inputValue.isValid ? (
              <p class="text-danger">
                A file name can't contain any of the following characters:
                <br />
                <span>\ / : * ? " &#060;&#062; |</span>
              </p>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  ) : (
    <div className="modal-body">
      <form>
        <div class="mb-3">
          <label for="new-folder-name" class="form-label">
            Choose File(s) You Want to Add
          </label>
          <input type="file" class="form-control-file" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={isShowed ? "show-modal modal" : "modal"} tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create File</h5>
          </div>
          <div className="modal-header nav-tabs">
            <ul class="nav nav-tab">
              <li class="nav-item">
                <a
                  class={isFolder ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  onClick={handleFolderTabClick}
                >
                  Folder
                </a>
              </li>
              <li class="nav-item">
                <a
                  class={!isFolder ? "nav-link active" : "nav-link"}
                  onClick={handleFileTabClick}
                >
                  File
                </a>
              </li>
            </ul>
          </div>
          {dialogBody}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseClick}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              disabled={!inputValue.isValid}
            >
              Create Files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFileDialog;

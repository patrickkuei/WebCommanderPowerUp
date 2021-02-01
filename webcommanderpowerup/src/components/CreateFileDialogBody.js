import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useCreateFilesContext } from "../contexts";

export default function CreateFileDialogBody(props) {
  const { isFolder } = props;

  const {
    newFolderState,
    setNewFolderState,
    newFiles,
    setNewFiles,
    newFilesRef,
  } = useCreateFilesContext();

  const handleFolderNameInput = (e) => {
    const isFolderNameValid = checkFolderNameValidation(e.target.value);
    setNewFolderState({
      isValid: isFolderNameValid,
      value: e.target.value,
    });
  };

  const checkFolderNameValidation = (text) => {
    const reg = /.*[\/:*?"<>|].*/;
    return text.length > 0 && !reg.test(text);
  };

  const handleFilesUpload = (e) => {
    const files = [];

    for (let i = 0; i < e.target.files.length; i++) {
      files.push({
        id: uuidv4(),
        name: e.target.files[i].name,
        size: e.target.files[i].size,
      });
    }
    setNewFiles(files);
  };

  CreateFileDialogBody.propTypes = {
    isFolder: PropTypes.bool,
  };

  return isFolder ? (
    <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="new-folder-name" className="form-label">
            The Name of New Folder You Want to Create
          </label>
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              id="newFolderName"
              value={newFolderState.value}
              onChange={(e) => handleFolderNameInput(e)}
            />
          </div>
          {newFolderState.value.length > 0 && !newFolderState.isValid ? (
            <p className="text-danger">
              A file name can't contain any of the following characters:
              <br />
              <span>\ / : * ? " &#060;&#062; |</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  ) : (
    <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="new-folder-name" className="form-label">
            Choose File(s) You Want to Add
          </label>
          {newFiles.length === 0 ? (
            <div>No File Chosen</div>
          ) : (
            <div>
              <ul>
                {newFiles.map((file) => (
                  <li key={file.id}>
                    {file.name} ({file.size} bytes)
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            multiple
            type="file"
            className="form-control-file"
            onChange={handleFilesUpload}
            ref={newFilesRef}
          />
        </div>
      </form>
    </div>
  );
}

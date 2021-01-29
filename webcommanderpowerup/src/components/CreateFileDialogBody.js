import React from "react";
import PropTypes from "prop-types";

export default function CreateFileDialogBody(props) {
  const { isFolder, newFolderState, setNewFolderState, newFileRef } = props;

  const handleFolderNameInput = (e) => {
    const isFolderNameValid = checkFolderNameValidation(e.target.value);
    setNewFolderState({
      isValid: isFolderNameValid,
      value: e.target.value,
    });
  };

  const checkFolderNameValidation = (text) => {
    const reg = /.*[\\\/:\*\?"<>\|].*/;
    return text.length > 0 && !reg.test(text);
  };

  CreateFileDialogBody.propTypes = {
    isFolder: PropTypes.bool,
    newFolderState: PropTypes.object,
    setNewFolderState: PropTypes.func,
    newFileRef: PropTypes.object,
  };

  return isFolder ? (
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
              value={newFolderState.value}
              onChange={(e) => handleFolderNameInput(e)}
            />
          </div>
          {newFolderState.value.length > 0 && !newFolderState.isValid ? (
            <p class="text-danger">
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
        <div class="mb-3">
          <label for="new-folder-name" class="form-label">
            Choose File(s) You Want to Add
          </label>
          <input type="file" class="form-control-file" ref={newFileRef} />
        </div>
      </form>
    </div>
  );
}

import actionTypes from "./actionTypes";

const selectedFilesActions = {
  appendSelectedFile: (file) => {
    return {
      type: actionTypes.APPEND_SELECTED_FILE,
      id: file.id,
      name: file.name,
      fileType: file.fileType,
    };
  },
  deselectFile: (id) => ({
    type: actionTypes.DELETE_FILE,
    id,
  }),
  reset: () => ({
    type: actionTypes.RESET,
  }),
};

export default selectedFilesActions;

import actionTypes from "./actionTypes";

const selectedFilesActions = {
  appendSelectedFile: (id, name, fileType) => {
    return {
      type: actionTypes.APPEND_SELECTED_FILE,
      id,
      name,
      fileType,
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

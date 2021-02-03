import actionTypes from "./actionTypes";

const selectedFilesActions = {
  appendSelectedFile: (id, name, type) => {
    console.log("actions");
    return {
      type: actionTypes.APPEND_SELECTED_FILE,
      id,
      name,
      type,
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

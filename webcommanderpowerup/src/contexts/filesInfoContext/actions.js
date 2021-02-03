import actionTypes from "./actionTypes";

const fileActions = {
  dataLoaing: () => ({
    type: actionTypes.DATA_LOADING,
  }),
  updateCurrentFolder: (folderData) => ({
    type: actionTypes.UPDATE_CURRENT_FOLDER,
    folderData,
  }),
  deleteFile: (id) => ({
    type: actionTypes.DELETE_FILE,
    id,
  }),
};

export default fileActions;

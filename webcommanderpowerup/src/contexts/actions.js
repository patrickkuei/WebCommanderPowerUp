import actionTypes from "../constants/actionTypes";

const actions = {
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

export default actions;

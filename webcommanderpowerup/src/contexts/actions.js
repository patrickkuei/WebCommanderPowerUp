import actionTypes from "../constants/actionTypes";

export const fileActions = {
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

export const pathActions = {
  slicePath: (index) => ({
    type: actionTypes.SLICE_PATH,
    index,
  }),
  appendFolder: (id, name) => ({
    type: actionTypes.APPEND_FOLDER,
    id,
    name,
  }),
  getNewPathArray: (dataset) => ({
    type: actionTypes.GET_NEW_PATH,
    dataset,
  }),
};

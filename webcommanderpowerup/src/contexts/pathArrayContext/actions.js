import actionTypes from "./actionTypes";

const pathActions = {
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

export default pathActions;

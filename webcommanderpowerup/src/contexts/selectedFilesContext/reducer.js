import actionTypes from "./actionTypes";

export const getSelectedFilesDefault = () => [];
export function SelectedFilesReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.APPEND_SELECTED_FILE: {
      const { id, name, fileType } = action;
      return [...prevState, { id: id, name: name, type: fileType }];
    }
    case actionTypes.DESELECT_FILE: {
      const { id } = action;
      return prevState.filter((selectedFile) => selectedFile.id !== id);
    }

    case actionTypes.RESET: {
      return getSelectedFilesDefault();
    }
    default:
      console.log("default");
      break;
  }
}

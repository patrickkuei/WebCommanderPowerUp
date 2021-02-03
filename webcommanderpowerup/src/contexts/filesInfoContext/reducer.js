import actionTypes from "./actionTypes";

export const getCurrentFolderDefault = () => ({
  isLoading: true,
  id: "",
  children: [],
});

export function CurrentFileReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.DATA_LOADING: {
      return { ...prevState, isLoading: true };
    }

    case actionTypes.UPDATE_CURRENT_FOLDER: {
      const { folderData } = action;
      return {
        isLoading: false,
        id: folderData.id,
        children: folderData.children,
      };
    }
    case actionTypes.DELETE_FILE: {
      const { id } = action;
      return {
        ...prevState,
        children: prevState.children.filter((file) => file.id !== id),
      };
    }
    default:
      throw new Error("action not defined");
  }
}

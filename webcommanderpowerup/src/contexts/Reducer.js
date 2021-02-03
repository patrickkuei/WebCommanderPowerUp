import actionTypes from "../constants/actionTypes";

export const getCurrentFolderDefault = () => ({
  isLoading: true,
  id: "",
  children: [],
});

export function CurrentFileReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.DATA_LOADING:
      return { ...prevState, isLoading: true };

    case actionTypes.UPDATE_CURRENT_FOLDER:
      const { folderData } = action;
      return {
        isLoading: false,
        id: folderData.id,
        children: folderData.children,
      };
    case actionTypes.DELETE_FILE:
      const { id } = action;
      return {
        ...prevState,
        children: prevState.children.filter((file) => file.id !== id),
      };
    default:
      throw new Error("action not defined");
  }
}

export const getPathArrayDefault = () => [{ id: "root", name: "root" }];
export function PathArrayReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.SLICE_PATH:
      const { index } = action;
      return prevState.slice(0, index + 1);

    case actionTypes.APPEND_FOLDER:
      const { id, name } = action;
      return [...prevState, { id, name }];

    case actionTypes.GET_NEW_PATH:
      const { dataset } = action;
      const newPath = [];
      const idArray = dataset.idpath.split("/");
      const nameArray = dataset.namepath.split("/");

      for (let i = 0; i < idArray.length; i++) {
        newPath.push({ id: idArray[i], name: nameArray[i] });
      }
      return newPath;
    default:
      break;
  }
}

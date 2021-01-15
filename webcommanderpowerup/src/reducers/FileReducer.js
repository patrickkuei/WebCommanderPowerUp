import { FILE_ACTIONS } from "../action/FileAction";

export const fileReducer = (state, action) => {
  switch (action.type) {
    case FILE_ACTIONS.FETCH_FOLDER_FILES:
      return {
        ...state,
        pathArray: action.payload.fullPath.split("\\"),
        childrenFiles: action.payload.children,
      };

    case FILE_ACTIONS.TO_OTHER_FOLDER:
      console.log("folderId ", action.payload);
      return {
        ...state,
        folderId: action.payload,
      };

    case FILE_ACTIONS.TO_PREV_FOLDER:
      const { idPathArray, index } = action.payload;
      console.log("index in Reducer", index);
      return {
        ...state,
        pathArray: state.pathArray.slice(0, index + 1),
        folderId: idPathArray[index],
      };
    case FILE_ACTIONS.OPEN_FOLDER:
      return {
        ...state,
        folderId: action.payload,
      };
    default:
      console.log("reducer active and state is: ", state);
      break;
  }
};

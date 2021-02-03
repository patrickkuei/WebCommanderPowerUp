import actionTypes from "./actionTypes";

export const getPathArrayDefault = () => [{ id: "root", name: "root" }];
export function PathArrayReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.SLICE_PATH: {
      const { index } = action;
      return prevState.slice(0, index + 1);
    }

    case actionTypes.APPEND_FOLDER: {
      const { id, name } = action;
      return [...prevState, { id, name }];
    }
    case actionTypes.GET_NEW_PATH: {
      const { dataset } = action;
      const newPath = [];
      const idArray = dataset.idpath.split("/");
      const nameArray = dataset.namepath.split("/");

      for (let i = 0; i < idArray.length; i++) {
        newPath.push({ id: idArray[i], name: nameArray[i] });
      }
      return newPath;
    }
    default:
      break;
  }
}

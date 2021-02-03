import filesAPI from "./api/filesAPI";
import fileActions from "./contexts/filesInfoContext/actions";
import selectedFilesActions from "./contexts/selectedFilesContext/actions";

export const resetSelecetedFiles = (dispatch) => {
  dispatch(selectedFilesActions.reset());
};

export const fetchFolderFiles = async (dispatch, id) => {
  dispatch(fileActions.dataLoaing());
  const { data } = await filesAPI.getFilesById(id);
  dispatch(fileActions.updateCurrentFolder(data));
};

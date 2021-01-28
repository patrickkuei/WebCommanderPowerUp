import axios from "axios";
import { BASE_URL } from "../constants";

const api = {
  getFolderHierarchy: () => {
    return axios.get(`${BASE_URL}/hierarchy`);
  },

  getFilesById: (folderId) => {
    return axios.get(`${BASE_URL}/items/${folderId}`);
  },

  createFileByData: (parentItemId, items, folders) => {
    return axios({
      url: `${BASE_URL}/items/`,
      method: "POST",
      transformRequest: [
        ...axios.defaults.transformRequest,
        (data) => ({ payload: data }),
      ],
      data: {
        parentItemId: parentItemId,
        items: items,
        folders: folders,
      },
    });
  },

  pasteFilesById: (folder, files) => {
    return axios({
      url: `${BASE_URL}/items/`,
      method: "POST",
      transformRequest: [
        ...axios.defaults.transformRequest,
        (data) => ({ payload: data }),
      ],
      data: {
        targetFolder: folder,
        files: files,
      },
    });
  },

  deleteFileById: (fileId) => {
    return axios({
      url: `${BASE_URL}/items/`,
      method: "DELETE",
      params: { id: fileId },
    });
  },
};
export default api;

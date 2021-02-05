import axios from "axios";
import { BASE_URL } from "../constants";

const api = {
  getFolderHierarchy: () => axios.get(`${BASE_URL}/hierarchy`),
  getFilesById: (folderId) => axios.get(`${BASE_URL}/items/${folderId}`),
  createFileByData: (parentItemId, items, folders) =>
    axios.post(`${BASE_URL}/items/`, {
      payload: { parentItemId, items, folders },
    }),
  pasteFilesById: (folder, files) =>
    axios.post(`${BASE_URL}/items/`, { payload: { folder, files } }),

  deleteFileById: (fileId) =>
    axios.delete(`${BASE_URL}/items/`, {
      params: { fileId },
    }),
};
export default api;

import axios from "axios";
import { BASE_URL } from "../constants";

const instace = axios.create({ baseURL: `${BASE_URL}/files` });

const api = {
  getFolderHierarchy: () => instace.get(`/hierarchy`),
  getFilesById: (folderId) =>
    axios.get(`${FILE_API_BASE_URL}/items/${folderId}`),
  createFileByData: (parentItemId, items, folders) =>
    axios.post(`${FILE_API_BASE_URL}/items/`, {
      payload: { parentItemId, items, folders },
    }),
  pasteFilesById: (folder, files) =>
    axios.post(`${FILE_API_BASE_URL}/items/`, { payload: { folder, files } }),

  deleteFileById: (fileId) =>
    axios.delete(`${FILE_API_BASE_URL}/items/`, {
      params: { fileId },
    }),
};
export default api;

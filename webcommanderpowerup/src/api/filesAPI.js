import axios from "axios";
import { BASE_URL } from "../constants";

const api = {
  getFolderHierarchy: () => {
    return axios.get(`${BASE_URL}/hierarchy`);
  },

  getFilesById: (folderId) => {
    return axios.get(`${BASE_URL}/items/${folderId}`);
  },

  deleteFileById: (fileId) => {
    return axios.delete(`${BASE_URL}/items/${fileId}`);
  },
};
export default api;

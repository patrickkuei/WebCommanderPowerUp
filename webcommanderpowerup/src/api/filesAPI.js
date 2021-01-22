import axios from "axios";
import { BASE_URL } from "../constants";

const api = {
  getFolderHierarchy: () => {
    console.log(`${BASE_URL}/hierarchy`);
    return axios.get(`${BASE_URL}/hierarchy`);
  },

  getFilesById: (folderId) => {
    console.log(`${BASE_URL}/items/${folderId}`);
    return axios.get(`${BASE_URL}/items/${folderId}`);
  },
};
export default api;

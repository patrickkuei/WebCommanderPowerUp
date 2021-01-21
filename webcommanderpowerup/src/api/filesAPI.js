import axios from "axios";
import { BASE_URL } from "../constants";

const api = {
  getFolderHierarchy: () => axios.get(`${BASE_URL}\hierarchy`),

  getFilesById: (folderId) => axios.get(`${BASE_URL}\items${folderId}`),
};
export default api;

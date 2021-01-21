import axios from "axios";

const api = {
  getFoldersInfo: () =>
    axios.get("http://172.16.240.53:45816/api/web-commander-pro/hierarchy"),

  getFilesByFolderId: (folderId) =>
    axios.get(
      "http://172.16.240.53:45816/api/web-commander-pro/items/​​​​​​​" +
        folderId
    ),
};
export default api;

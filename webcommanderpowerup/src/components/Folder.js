import React, { useContext } from "react";
import PropTypes from "prop-types";

import { SelectedFilesContext } from "../contexts/SelectedFilesContext";
import { FilesInfoContext } from "../contexts/FilesInfoContext";
import { useIcon } from "../constants/icons";
import { useTypeName } from "../constants/typeName";

function Folder(props) {
  const { file, isDetail } = props;
  const { setSelectedFiles } = useContext(SelectedFilesContext);
  const { setCurrentFolderInfo, idPathArray, setIdPathArray } = useContext(
    FilesInfoContext
  );
  const typeName = useTypeName(file.type);
  const icon = useIcon(typeName);

  const handleCheckBoxClick = (e, fileId) => {
    if (e.target.checked) {
      setSelectedFiles((prev) => [...prev, fileId]);
    } else {
      setSelectedFiles((prev) => {
        return prev.filter((selectedFile) => selectedFile !== fileId);
      });
    }
  };

  const handleFolderCardDbClick = (folderId, folderName) => {
    setIdPathArray([...idPathArray, folderId]);
    setCurrentFolderInfo((prev) => {
      return {
        ...prev,
        pathArray: [...prev.pathArray, folderName],
        currentFolderId: folderId,
      };
    });
  };

  Folder.propTypes = {
    file: PropTypes.object,
    isDetail: PropTypes.bool,
  };

  if (!isDetail) {
    return (
      // Bootstrap card
      <div
        className="col-3 card"
        onDoubleClick={() => handleFolderCardDbClick(file.id, file.name)}
      >
        <input
          className="folder__checkbox"
          onChange={(e) => handleCheckBoxClick(e, file.id)}
          type="checkbox"
        />
        <div className="folder__content">
          {icon}
          <div className="folder__content__picture-name card-body text-center">
            <h5 className="card-title">{file.name}</h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <tr onDoubleClick={() => handleFolderCardDbClick(file.id)}>
        <td>
          <input
            onChange={(e) => handleCheckBoxClick(e, file.id)}
            type="checkbox"
          />
        </td>
        <td scope="row">{file.name}</td>
        <td>{typeName.toUpperCase()}</td>
        <td>{file.size.toLocaleString()} KB</td>
      </tr>
    );
  }
}

export default Folder;

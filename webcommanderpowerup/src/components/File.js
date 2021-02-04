import React from "react";
import PropTypes from "prop-types";

import { useFilesDispatch } from "../contexts/filesInfoContext/";

import { usePathArrayDispatch } from "../contexts/pathArrayContext";

import { useSelectedFilesDispatch } from "../contexts/selectedFilesContext";

import { useIcon } from "../constants/icons";
import { useTypeName } from "../constants/typeName";
import pathActions from "../contexts/pathArrayContext/actions";
import selectedFilesActions from "../contexts/selectedFilesContext/actions";

import { fetchFolderFiles } from "../utilities";

function File(props) {
  const { file, isDetail, isChecked } = props;
  const { currentFolderDispatch } = useFilesDispatch();
  const { pathArrayDispatch } = usePathArrayDispatch();
  const { selectedFilesDispatch } = useSelectedFilesDispatch();
  const typeName = useTypeName(file.type);
  const icon = useIcon(typeName);

  const handleFolderCardDbClick = (folderId, folderName) => {
    if (typeName === "folder") {
      fetchFolderFiles(currentFolderDispatch, folderId);
      pathArrayDispatch(pathActions.appendFolder(folderId, folderName));
    }
  };

  const handleCheckBoxClick = (e, fileId, fileName, fileType) => {
    if (e.target.checked) {
      selectedFilesDispatch(
        selectedFilesActions.appendSelectedFile(fileId, fileName, fileType)
      );
    } else {
      selectedFilesDispatch(selectedFilesActions.deselectFile(fileId));
    }
  };

  if (!isDetail) {
    return (
      <div
        className="col-3 card"
        onDoubleClick={() => handleFolderCardDbClick(file.id, file.name)}
      >
        <input
          className="folder__checkbox"
          type="checkbox"
          checked={isChecked}
          onDoubleClick={(e) => e.stopPropagation()}
          onChange={(e) =>
            handleCheckBoxClick(e, file.id, file.name, file.type)
          }
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
      <tr onDoubleClick={() => handleFolderCardDbClick(file.id, file.name)}>
        <td>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => handleCheckBoxClick(e, file.id)}
          />
        </td>
        <td scope="row">{file.name}</td>
        <td>{typeName.toUpperCase()}</td>
        <td>{file.size.toLocaleString()} KB</td>
      </tr>
    );
  }
}

export default File;
File.propTypes = {
  file: PropTypes.object,
  isDetail: PropTypes.bool,
  isChecked: PropTypes.bool,
};

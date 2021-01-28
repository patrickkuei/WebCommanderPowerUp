import React from "react";
import PropTypes from "prop-types";

import { useFilesContext, useSelectedFilesContext } from "../contexts";
import { useIcon } from "../constants/icons";
import { useTypeName } from "../constants/typeName";

function File(props) {
  const { file, isDetail, defaultCheck } = props;
  const { setSelectedFiles } = useSelectedFilesContext();
  const { setCurrentFolder, setPathArray } = useFilesContext();
  const typeName = useTypeName(file.type);
  const icon = useIcon(typeName);

  const handleCheckBoxClick = (e, fileId, fileName, fileType) => {
    if (e.target.checked) {
      setSelectedFiles((prev) => [
        ...prev,
        { id: fileId, name: fileName, type: fileType },
      ]);
    } else {
      setSelectedFiles((prev) => {
        return prev.filter((selectedFile) => selectedFile.id !== fileId);
      });
    }
  };

  const handleFolderCardDbClick = (e, folderId, folderName) => {
    if (typeName === "folder") {
      setPathArray((prev) => [...prev, { id: folderId, name: folderName }]);
      setCurrentFolder((prev) => {
        return {
          ...prev,
          id: folderId,
        };
      });
    }
  };

  File.propTypes = {
    file: PropTypes.object,
    isDetail: PropTypes.bool,
  };

  if (!isDetail) {
    return (
      <div
        className="col-3 card"
        onDoubleClick={(e) => handleFolderCardDbClick(e, file.id, file.name)}
      >
        <input
          className="folder__checkbox"
          onDoubleClick={(e) => e.stopPropagation()}
          onChange={(e) =>
            handleCheckBoxClick(e, file.id, file.name, file.type)
          }
          type="checkbox"
          defaultChecked={defaultCheck}
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

export default File;

import React, { useContext } from "react";
import PropTypes from "prop-types";

import Folder from "./Folder";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function FolderList(props) {
  const { currentFolderInfo } = useContext(FilesInfoContext);
  const { childrenFiles } = currentFolderInfo;
  const { isDetail } = props;

  FolderList.propTypes = {
    isDetail: PropTypes.bool,
  };

  return (
    <div className="folder-list row border-bottom overflow-auto">
      {!isDetail ? (
        childrenFiles.map((file) => (
          <Folder key={file.id} file={file} isDetail={isDetail} />
        ))
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th scope="col">name</th>
              <th scope="col">type</th>
              <th scope="col">size</th>
            </tr>
          </thead>
          <tbody>
            {childrenFiles.map((file) => (
              <Folder key={file.id} file={file} isDetail={isDetail} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FolderList;

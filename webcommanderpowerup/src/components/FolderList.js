import React from "react";
import PropTypes from "prop-types";

import Folder from "./Folder";

import { useFilesContext } from "../contexts";

function FolderList(props) {
  const { currentFolder } = useFilesContext();
  const { children } = currentFolder;
  const { isDetail } = props;

  FolderList.propTypes = {
    isDetail: PropTypes.bool,
  };

  return (
    <div className="folder-list row border overflow-auto">
      {!isDetail ? (
        children.map((file) => (
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
            {children.map((file) => (
              <Folder key={file.id} file={file} isDetail={isDetail} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FolderList;

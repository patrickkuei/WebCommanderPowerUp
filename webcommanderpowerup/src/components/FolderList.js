import React, { useContext, useState } from "react";

import Folder from "./Folder";

import { FilesInfoContext } from "../contexts/FilesInfoContext";

function FolderList(props) {
  const { currentFolderInfo } = useContext(FilesInfoContext);
  const { childrenFiles } = currentFolderInfo;
  const { isDetail } = props;

  return (
    <div className="folder-list row border-bottom overflow-auto">
      {!isDetail ? (
        childrenFiles.map((file) => (
          <Folder key={file.id} file={file} isDetail={isDetail} />
        ))
      ) : (
        <table class="table table-hover">
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

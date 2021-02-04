import React, { useEffect } from "react";
import PropTypes from "prop-types";

import LoadingFolderList from "./loadingPage/LoadingFolderList";
import File from "./File";

import {
  useFilesContext,
  useFilesDispatch,
} from "../contexts/filesInfoContext/";
import { useSelectedFilesContext } from "../contexts/selectedFilesContext";

import { fetchFolderFiles } from "../utilities";

function FileList(props) {
  const { isDetail } = props;
  const { currentFolder } = useFilesContext();
  const { currentFolderDispatch } = useFilesDispatch();
  const { selectedFiles } = useSelectedFilesContext();

  const { children } = currentFolder;

  const getInputChecked = (fileId) => {
    let checked = false;
    for (let i = 0; i < selectedFiles.length; i++) {
      if (fileId === selectedFiles[i].id) {
        checked = true;
        break;
      }
    }
    return checked;
  };

  useEffect(() => {
    fetchFolderFiles(currentFolderDispatch, "root");
  }, []);

  if (currentFolder.isLoading) {
    return <LoadingFolderList />;
  } else {
    return (
      <div className="folder-list row border overflow-auto">
        {!isDetail ? (
          children.map((file) => {
            const isChecked = getInputChecked(file.id);
            return (
              <File
                key={file.id}
                file={file}
                isDetail={isDetail}
                isChecked={isChecked}
              />
            );
          })
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
              {children.map((file) => {
                const isChecked = getInputChecked(file.id);
                return (
                  <File
                    key={file.id}
                    file={file}
                    isDetail={isDetail}
                    isChecked={isChecked}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default FileList;
FileList.propTypes = {
  isDetail: PropTypes.bool,
};

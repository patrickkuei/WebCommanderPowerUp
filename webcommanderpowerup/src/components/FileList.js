import React, { useEffect } from "react";
import PropTypes from "prop-types";

import File from "./File";

import { useFilesContext, useSelectedFilesContext } from "../contexts";
import LoadingFolderList from "./loadingPage/LoadingFolderList";

function FileList(props) {
  const { currentFolder, fetchFolderFiles } = useFilesContext();
  const { selectedFiles } = useSelectedFilesContext();
  const { children } = currentFolder;
  const { isDetail } = props;

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
    fetchFolderFiles("root");
  }, []);

  FileList.propTypes = {
    isDetail: PropTypes.bool,
  };

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

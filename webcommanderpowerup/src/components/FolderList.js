import React, { useEffect } from "react";
import PropTypes from "prop-types";

import File from "./File";

import { useFilesContext, useSelectedFilesContext } from "../contexts";
import LoadingFolderList from "./loadingPage/LoadingFolderList";
import filesAPI from "../api/filesAPI";

function FolderList(props) {
  const { currentFolder, setCurrentFolder } = useFilesContext();
  const { selectedFiles } = useSelectedFilesContext();
  const { children } = currentFolder;
  const { isDetail } = props;

  const fetchFolderFiles = async () => {
    const { data } = await filesAPI.getFilesById(currentFolder.id);

    setCurrentFolder(() => {
      return {
        isLoading: false,
        id: data.id,
        children: data.children,
      };
    });
  };

  const getDefaultCheck = (fileId) => {
    let defaultCheck = false;
    for (let i = 0; i < selectedFiles.length; i++) {
      if (fileId === selectedFiles[i].id) {
        defaultCheck = true;
        break;
      }
    }
    return defaultCheck;
  };

  useEffect(() => {
    fetchFolderFiles();
  }, [currentFolder.id]);

  FolderList.propTypes = {
    isDetail: PropTypes.bool,
  };

  if (currentFolder.isLoading) {
    return <LoadingFolderList />;
  } else {
    return (
      <div className="folder-list row border overflow-auto">
        {!isDetail ? (
          children.map((file) => {
            const defaultCheck = getDefaultCheck(file.id);
            return (
              <File
                key={file.id}
                file={file}
                isDetail={isDetail}
                defaultCheck={defaultCheck}
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
              {children.map((file) => (
                <File key={file.id} file={file} isDetail={isDetail} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default FolderList;

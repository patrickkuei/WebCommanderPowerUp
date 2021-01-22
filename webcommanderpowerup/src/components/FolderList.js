import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Folder from "./Folder";

import { useFilesContext } from "../contexts";
import LoadingFolderList from "./loadingPage/LoadingFolderList";
import filesAPI from "../api/filesAPI";

function FolderList(props) {
  const { currentFolder, setCurrentFolder } = useFilesContext();
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
}

export default FolderList;

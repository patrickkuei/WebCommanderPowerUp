import React, { useContext } from "react";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function BreadCrumb() {
  const { filesInfo, setFilesInfo } = useContext(FilesInfoContext);

  const handlePathLinkClick = (index) => {
    // setFilesInfo((prev) => {
    //   return {
    //     isLoaded: prev.isLoaded,
    //     files: prev.files,
    //     path: prev.path,
    //     pathArray: prev.pathArray.slice(0, index + 1),
    //   };
    // });
  };

  const decoratedPath = filesInfo.pathArray.map((pathPart, index) => {
    return (
      <li key={index.toString() + pathPart} className="breadcrumb-item">
        <a href="#" onClick={() => handlePathLinkClick(index)}>
          {pathPart}
        </a>
      </li>
    );
  });

  return (
    // Bootstrap breadcrumb
    <div className="row justify-content-center" style={{ height: "10%" }}>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
          {decoratedPath}
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;

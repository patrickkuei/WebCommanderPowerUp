import React, { useContext } from "react";
import { FilesInfoContext } from "../contexts/FilesInfoContext";

function BreadCrumb(props) {
  const { pathArray, setPathArray } = props;

  const handlePathLinkClick = (index) => {};

  const decoratedPath = pathArray.map((pathPart, index) => {
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
    <div className="breadcrumb-screen row border-bottom">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb-screen__list breadcrumb">{decoratedPath}</ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;

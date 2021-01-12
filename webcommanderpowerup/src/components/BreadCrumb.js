import React, { useContext } from "react";
import { PathContext } from "../contexts/PathContext";

function BreadCrumb() {
  const pathContext = useContext(PathContext);
  const { pathArray, setPathArray } = pathContext;

  const handlePathLinkClick = (index) => {
    setPathArray((prev) => {
      return prev.slice(0, index + 1);
    });
  };

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

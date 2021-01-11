import React, { useContext } from "react";
import { PathContext } from "../contexts/PathContext";

function BreadCrumb() {
  const pathContext = useContext(PathContext);
  const { path, setPath } = pathContext;
  const pathArray = path.split("\\");

  const decoratedPath = pathArray.map((pathPart, index) => {
    return (
      <li key={index} className="breadcrumb-item">
        <a href="#">{pathPart}</a>
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

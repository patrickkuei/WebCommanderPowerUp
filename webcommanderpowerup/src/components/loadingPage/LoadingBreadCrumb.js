import React from "react";

import ContentLoader from "react-content-loader";

export default function LoadingBreadCrumb() {
  const listArray = [];

  for (let i = 0; i < 1; i++) {
    listArray.push(
      <li key={i} className="breadcrumb-item">
        <ContentLoader
          speed={3}
          width={70}
          height={26}
          viewBox="0 0 70 26"
          backgroundColor="#dedede"
          foregroundColor="#7f7d9b"
        >
          <rect x="0" y="0" rx="3" ry="3" width="150" height="26" />
        </ContentLoader>
      </li>
    );
  }

  return (
    <div className="breadcrumb-screen row align-items-center justify-content-center">
      <div className="col-8 border rounded shadow-sm">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-screen__list breadcrumb">{listArray}</ol>
        </nav>
      </div>
    </div>
  );
}

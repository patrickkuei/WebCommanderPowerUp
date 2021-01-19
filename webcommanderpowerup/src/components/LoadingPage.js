import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";

function LoadingPage() {
  return (
    <ContentLoader
      speed={3}
      width={1535}
      height={505}
      viewBox="0 0 1535 505"
      backgroundColor="#f3f3f3"
      foregroundColor="#d6d6d6"
    >
      <rect x="11" y="10" rx="3" ry="3" width="260" height="500" />
      <rect x="300" y="10" rx="3" ry="3" width="1220" height="80" />
      <rect x="300" y="114" rx="3" ry="3" width="1220" height="391" />
    </ContentLoader>
  );
}

export default LoadingPage;

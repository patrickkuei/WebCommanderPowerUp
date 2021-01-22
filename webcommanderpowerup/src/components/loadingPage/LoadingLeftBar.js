import React from "react";

import ContentLoader from "react-content-loader";

export default function LoadingLeftBar() {
  return (
    <ContentLoader
      speed={3}
      width={222}
      height={505}
      viewBox="0 0 222 505"
      backgroundColor="#dedede"
      foregroundColor="#7f7d9b"
    >
      <rect x="10" y="10" rx="3" ry="3" width="50" height="15" />
      <rect x="20" y="40" rx="3" ry="3" width="50" height="15" />
      <rect x="20" y="70" rx="3" ry="3" width="120" height="15" />
      <rect x="20" y="100" rx="3" ry="3" width="50" height="15" />
      <rect x="30" y="130" rx="3" ry="3" width="70" height="15" />
      <rect x="30" y="160" rx="3" ry="3" width="70" height="15" />
      <rect x="40" y="190" rx="3" ry="3" width="120" height="15" />
      <rect x="40" y="220" rx="3" ry="3" width="120" height="15" />
    </ContentLoader>
  );
}

import React from "react";
import ContentLoader from "react-content-loader";

const ProductDetailsLoader = () => (
  <ContentLoader
    speed={1}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#fafafa"
  >
    <rect x="0" y="10" rx="5" ry="5" width="300" height="20" />
    <rect x="0" y="40" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="65" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="85" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="105" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="130" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="150" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="170" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="195" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="215" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="235" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="260" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="280" rx="5" ry="5" width="150" height="10" />
  </ContentLoader>
);

export default ProductDetailsLoader;

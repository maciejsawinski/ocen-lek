import React from "react";
import ContentLoader from "react-content-loader";

const ProductReviewsLoader = () => (
  <ContentLoader
    speed={1}
    width={300}
    height={300}
    viewBox="0 0 300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#fafafa"
  >
    <rect x="0" y="0" rx="5" ry="5" width="75" height="20" />
    <rect x="0" y="30" rx="5" ry="5" width="250" height="40" />
    <rect x="0" y="80" rx="5" ry="5" width="200" height="15" />
    <rect x="0" y="105" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="125" rx="5" ry="5" width="200" height="15" />
    <rect x="0" y="150" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="170" rx="5" ry="5" width="200" height="15" />
    <rect x="0" y="195" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="215" rx="5" ry="5" width="200" height="15" />
    <rect x="0" y="240" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="260" rx="5" ry="5" width="200" height="15" />
    <rect x="0" y="285" rx="5" ry="5" width="150" height="10" />
  </ContentLoader>
);

export default ProductReviewsLoader;

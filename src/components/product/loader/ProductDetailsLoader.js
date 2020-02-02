import React from "react";
import ContentLoader from "react-content-loader";

const ProductDetailsLoader = () => (
  <ContentLoader
    speed={1}
    width={300}
    height={320}
    viewBox="0 0 300 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#fafafa"
  >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="20" />
    <rect x="0" y="70" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="95" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="115" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="135" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="160" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="180" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="200" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="225" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="245" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="265" rx="5" ry="5" width="200" height="15" />
    <rect x="30" y="290" rx="5" ry="5" width="150" height="10" />
    <rect x="30" y="310" rx="5" ry="5" width="150" height="10" />
  </ContentLoader>
);

export default ProductDetailsLoader;

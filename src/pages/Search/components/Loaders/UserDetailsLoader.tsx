import React from 'react';
import ContentLoader from "react-content-loader";

const UserDetailsLoader = () => (
    <ContentLoader 
    speed={2}
    width={1251}
    height={335}
    viewBox="0 0 1251 335"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
  >
    <rect x="3" y="-6" rx="8" ry="8" width="278" height="268" /> 
    <rect x="0" y="277" rx="8" ry="8" width="153" height="36" /> 
    <rect x="166" y="79" rx="0" ry="0" width="55" height="65" /> 
    <rect x="321" y="4" rx="8" ry="8" width="846" height="253" />
  </ContentLoader>
);

export default UserDetailsLoader;
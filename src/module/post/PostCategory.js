import React from "react";
import styled, { css } from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  ${(props) =>
    props.type === "primary" &&
    css`
      color: #6b6b6b;
      background-color: ${(props) => props.theme.grayF3};
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      color: white;

      background-color: ${(props) => props.theme.tertiary};
    `};
`;
const PostCategory = ({ children, type = "primary", className = "" }) => {
  return (
    <PostCategoryStyles className={className} type={type}>
      {children}
    </PostCategoryStyles>
  );
};

export default PostCategory;

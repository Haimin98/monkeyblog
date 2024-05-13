import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.primary};
  cursor: pointer;
`;
const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyled htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyled>
  );
};

export default Label;

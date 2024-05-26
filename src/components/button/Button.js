import LoadingSpinner from "components/loading/LoadingSpinner";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: white;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === "primary" &&
    css`
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `}
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  /* width: 100%; */
  height: ${(props) => props.height || "66px"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
/**
 * @param {*} onClick Handle button click
 * @requires
 * @param {string} type Type of button "button" | "submit" | "reset"
 * @returns
 */
const Button = ({
  type = "button",
  children,
  onClick = () => {},
  kind = "primary",
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to} style={{ display: "inline-block" }}>
        <ButtonStyled type={type} kind={kind} {...props}>
          {child}
        </ButtonStyled>
      </NavLink>
    );
  }
  return (
    <ButtonStyled type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyled>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  height: PropTypes.string,
  kind: PropTypes.string,
};

export default Button;

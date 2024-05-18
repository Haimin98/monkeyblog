import LoadingSpinner from "components/loading/LoadingSpinner";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 0 25px;
  line-height: 1;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  font-weight: 600;
  font-size: 18px;
  border-radius: 8px;
  width: 100%;
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
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <div>
      <ButtonStyled type={type} onClick={onClick} {...props}>
        {child}
      </ButtonStyled>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default Button;

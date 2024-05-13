import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
// import IconEyeClose from "components/icon/IconEyeClose";

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    border: 1px solid ${(props) => props.theme.primary};
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayLight};
    font-weight: 500;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  input:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }
  input::-webkit-input-placeholder {
    color: #84878b;
  }
  input::-moz-input-placeholder {
    color: #84878b;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <InputStyled hasIcon={children ? true : false}>
      <input type={type} id={name} {...field} {...props} />
      {children}
    </InputStyled>
  );
};

export default Input;

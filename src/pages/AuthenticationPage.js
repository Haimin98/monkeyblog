import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .have-account {
    margin-top: 20px;
    text-align: center;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      text-decoration: underline;
    }
  }
`;
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <NavLink to="/" className="logo">
          <img srcSet="/logo.png 2x" alt="monkey-blog" className="logo" />
        </NavLink>
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;

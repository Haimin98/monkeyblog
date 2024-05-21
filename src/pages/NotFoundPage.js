import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
    max-width: 300px;
  }
  .heading {
    font-size: 60px;
    font-weight: 900;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    margin-top: 40px;
    font-weight: 600;
    text-decoration: none;
  }
`;
const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img srcSet="logo.png 2x" alt="monkey-blog" />
      </NavLink>
      <h1 className="heading">Not Found Page</h1>
      <NavLink to="/" className={"back"}>
        Back Home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;

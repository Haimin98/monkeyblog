import Header from "components/layout/Header";
import { signOut } from "firebase/auth";
import { auth } from "firebasedb/firebase-config";
import React from "react";
import styled from "styled-components";

const HomePageStyle = styled.div``;

const HomePage = () => {
  return (
    <HomePageStyle>
      <Header></Header>
    </HomePageStyle>
  );
};

export default HomePage;

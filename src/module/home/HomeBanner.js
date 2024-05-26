import Button from "components/button/Button";
import React from "react";
import styled from "styled-components";

const HomebannerStyled = styled.div`
  height: 520px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  padding: 40px 0;
  max-width: 100%;
  /* max-width: 1180px; */
  margin: 0 auto;
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .banner-content {
    max-width: 600px;
    color: white;
  }
  .banner-heading {
    font-size: 36px;
    margin-bottom: 20px;
  }
  .banner-desc {
    line-height: 1.5;
    margin-bottom: 40px;
  }
  .banner-image {
    img {
      width: 508.119px;
      height: 414.715px;
      flex-shrink: 0;
    }
  }
`;
const HomeBanner = () => {
  return (
    <HomebannerStyled>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <div className="banner-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptates, fugit voluptatem, natus, voluptas voluptate
              </p>
            </div>
            <Button to="/sign-up" kind="secondary">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/banner.png" alt="" />
          </div>
        </div>
      </div>
    </HomebannerStyled>
  );
};

export default HomeBanner;

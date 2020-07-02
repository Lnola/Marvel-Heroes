import styled, { css } from "styled-components";
import Background from "../../assets/images/background.png";

export const NoCharacters = styled.span`
  position: absolute;
  top: 50%;
`;

export const NavCss = css`
  height: 18%;
  position: fixed;
  top: 0;
  background-image: url(${Background});
  background-size: 10%;
  background-position: center;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 1;

  @media (max-width: 1200px) {
    height: 12%;
  }

  @media (max-width: 900px) {
    height: 10%;
  }
`;

export const ContentCss = css`
  margin-top: 12%;

  @media (max-width: 900px) {
    margin-top: 14%;
  }

  @media (max-width: 750px) {
    margin-top: 17%;
  }

  @media (max-width: 500px) {
    margin-top: 23%;
  }
`;

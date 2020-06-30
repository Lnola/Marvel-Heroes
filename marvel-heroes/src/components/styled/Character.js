import styled, { css } from "styled-components";

export const CharacterImage = styled.span`
  height: 80%;
  width: 100%;
  display: inline-block;
  background-position: center;
  background-size: cover;
  ${({ src }) => src && `background-image: url(${src})`};
`;

export const CharacterName = styled.p`
  text-align: center;
  font-size: 90%;
`;

export const ArticleCss = css`
  background-color: #fff;
  border: 1px solid black;
  box-shadow: 10px 10px 24px -14px rgba(0, 0, 0, 0.75);

  @media (max-width: 900px) {
    margin-bottom: 30px;
  }
`;

export const BookmarkState = styled.img`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 2%;
  right: 2%;
  padding: 3%;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.75);
`;

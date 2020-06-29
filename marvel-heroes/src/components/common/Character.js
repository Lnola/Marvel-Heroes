import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FlexArticle, FlexSpan } from "../styled/Flex";
import Bookmarked from "../../assets/svg/Bookmarked.svg";
import NotBookmarked from "../../assets/svg/NotBookmarked.svg";

const CharacterImage = styled.span`
  height: 80%;
  width: 100%;
  display: inline-block;
  background-position: center;
  background-size: cover;
  ${({ src }) => src && `background-image: url(${src})`};
`;

const CharacterName = styled.p`
  text-align: center;
  font-size: 90%;
`;

const ArticleCss = css`
  background-color: #fff;
  border: 1px solid black;
  box-shadow: 10px 10px 24px -14px rgba(0, 0, 0, 0.75);
`;

const BookmarkState = styled.img`
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

const Character = ({ character }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [articleSize, setArticleSize] = useState({ width: "", height: "" });

  useEffect(() => {
    const bookmarksArray = localStorage.getItem("bookmarks");
    if (bookmarksArray && bookmarksArray.includes(JSON.stringify(character)))
      setIsBookmarked(true);
  }, [character, isBookmarked]);

  useEffect(() => {
    setArticleSizeToStandard();
    window.addEventListener("resize", setArticleSizeToStandard);
  }, []);

  const setArticleSizeToStandard = () => {
    setArticleSize({
      width: `${window.innerWidth / 7}px`,
      height: `${window.innerWidth / 4}px`,
    });
  };

  const addBookmark = () => {
    let bookmarksArray = [];
    if (localStorage.getItem("bookmarks"))
      bookmarksArray = JSON.parse(localStorage.getItem("bookmarks"));

    bookmarksArray.push(character);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
    setIsBookmarked(true);
  };

  const removeBookmark = () => {
    let bookmarksArray = [];
    if (localStorage.getItem("bookmarks"))
      bookmarksArray = JSON.parse(localStorage.getItem("bookmarks"));

    let index;
    bookmarksArray.forEach((bookmark, id) => {
      if (JSON.stringify(bookmark) === JSON.stringify(character)) index = id;
    });

    bookmarksArray.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
    setIsBookmarked(false);
  };

  return (
    <FlexArticle
      direction="column"
      height={articleSize.height}
      width={articleSize.width}
      margin="0 0 2% 0"
      position="relative"
      css={ArticleCss}
    >
      <CharacterImage
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />

      <FlexSpan height="20%" alignItems="center" justifyContent="center">
        <CharacterName>{character.name}</CharacterName>
        {isBookmarked ? (
          <span onClick={removeBookmark}>
            <BookmarkState src={Bookmarked} alt="Bookmarked" />
          </span>
        ) : (
          <span onClick={addBookmark}>
            <BookmarkState src={NotBookmarked} alt="NotBookmarked" />
          </span>
        )}
      </FlexSpan>
    </FlexArticle>
  );
};

export default Character;

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FlexArticle, FlexSpan } from "../styled/Flex";

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
`;

const Character = ({ character }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarksArray = localStorage.getItem("bookmarks");

    if (bookmarksArray && bookmarksArray.includes(JSON.stringify(character)))
      setIsBookmarked(true);
  }, [character, isBookmarked]);

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
      height={`${window.innerWidth / 4}px`}
      width={`${window.innerWidth / 7}px`}
      margin="0 0 2% 0"
      css={ArticleCss}
    >
      <CharacterImage
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />

      <FlexSpan height="20%" alignItems="center" justifyContent="center">
        <CharacterName>{character.name}</CharacterName>
        {isBookmarked ? (
          <span onClick={removeBookmark}> -</span>
        ) : (
          <span onClick={addBookmark}> +</span>
        )}
      </FlexSpan>
    </FlexArticle>
  );
};

export default Character;

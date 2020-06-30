import React, { useEffect, useState } from "react";
import { addBookmark } from "../../utils/addBookmark";
import { removeBookmark } from "../../utils/removeBookmark";
import { setArticleSizeToStandard } from "../../utils/setArticleSizeToStandard";
import Bookmarked from "../../assets/svg/Bookmarked.svg";
import NotBookmarked from "../../assets/svg/NotBookmarked.svg";
import { FlexArticle, FlexSpan } from "../styled/Flex";
import {
  CharacterImage,
  CharacterName,
  ArticleCss,
  BookmarkState,
} from "../styled/Character";

const Character = ({ character, setCharactersArray }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [articleSize, setArticleSize] = useState({ width: "", height: "" });

  useEffect(() => {
    const bookmarksArray = localStorage.getItem("bookmarks");
    if (bookmarksArray && bookmarksArray.includes(JSON.stringify(character)))
      setIsBookmarked(true);
  }, [character, isBookmarked]);

  useEffect(() => {
    setArticleSizeToStandard(setArticleSize);
    window.addEventListener("resize", () =>
      setArticleSizeToStandard(setArticleSize)
    );
  }, []);

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
          <span
            onClick={() =>
              removeBookmark(character, setIsBookmarked, setCharactersArray)
            }
          >
            <BookmarkState src={Bookmarked} alt="Bookmarked" />
          </span>
        ) : (
          <span onClick={() => addBookmark(character, setIsBookmarked)}>
            <BookmarkState src={NotBookmarked} alt="NotBookmarked" />
          </span>
        )}
      </FlexSpan>
    </FlexArticle>
  );
};

export default Character;

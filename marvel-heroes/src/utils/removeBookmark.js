import {
  setBookmarkedCharacters,
  getBookmarkedCharacters,
} from "./bookmarkedCharacters";
import { SET_BOOKMARKED_CHARACTERS } from "../store/redux";

export const removeBookmark = (character, setIsBookmarked, dispatch) => {
  let bookmarksArray = [];
  if (localStorage.getItem("bookmarks"))
    bookmarksArray = getBookmarkedCharacters();

  let index;
  bookmarksArray.forEach((bookmark, id) => {
    if (JSON.stringify(bookmark) === JSON.stringify(character)) index = id;
  });

  bookmarksArray.splice(index, 1);
  setBookmarkedCharacters(bookmarksArray);
  setIsBookmarked(false);

  dispatch({ type: SET_BOOKMARKED_CHARACTERS });
};

import {
  setBookmarkedCharacters,
  getBookmarkedCharacters,
} from "./bookmarkedCharacters";
import { SET_BOOKMARKED_CHARACTERS, UPDATE_IS_LOADING } from "../store/redux";

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
  dispatch({ type: UPDATE_IS_LOADING, payload: false });
};

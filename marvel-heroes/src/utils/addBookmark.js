import {
  getBookmarkedCharacters,
  setBookmarkedCharacters,
} from "./bookmarkedCharacters";

export const addBookmark = (character, setIsBookmarked) => {
  let bookmarksArray = [];
  if (localStorage.getItem("bookmarks"))
    bookmarksArray = getBookmarkedCharacters();

  bookmarksArray.push(character);
  setBookmarkedCharacters(bookmarksArray);
  setIsBookmarked(true);
};

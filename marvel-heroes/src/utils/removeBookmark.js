import { setCharactersToLocalStorage } from "./setCharactersToLocalStorage";

export const removeBookmark = (
  character,
  setIsBookmarked,
  setCharactersArray
) => {
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

  setCharactersToLocalStorage(setCharactersArray);
};

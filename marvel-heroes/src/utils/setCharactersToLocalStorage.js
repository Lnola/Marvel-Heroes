export const setCharactersToLocalStorage = (setCharactersArray) =>
  setCharactersArray(JSON.parse(localStorage.getItem("bookmarks")));

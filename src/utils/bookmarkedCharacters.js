export const getBookmarkedCharacters = () => {
  return JSON.parse(localStorage.getItem("bookmarks"));
};

export const setBookmarkedCharacters = (bookmarksArray) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
};

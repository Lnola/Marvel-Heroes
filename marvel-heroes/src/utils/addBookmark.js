export const addBookmark = (character, setIsBookmarked) => {
  let bookmarksArray = [];
  if (localStorage.getItem("bookmarks"))
    bookmarksArray = JSON.parse(localStorage.getItem("bookmarks"));

  bookmarksArray.push(character);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksArray));
  setIsBookmarked(true);
};

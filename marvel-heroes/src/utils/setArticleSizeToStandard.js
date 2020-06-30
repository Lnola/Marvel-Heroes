export const setArticleSizeToStandard = (setArticleSize) => {
  switch (true) {
    case window.innerWidth < 900 && window.innerWidth > 600:
      setArticleSize({
        width: `${window.innerWidth / 4}px`,
        height: `${window.innerWidth / 2.3}px`,
      });
      break;

    case window.innerWidth < 600:
      setArticleSize({
        width: `${window.innerWidth / 1.5}px`,
        height: `${window.innerWidth / 0.9}px`,
      });
      break;

    default:
      setArticleSize({
        width: `${window.innerWidth / 7}px`,
        height: `${window.innerWidth / 4}px`,
      });
      break;
  }
};

import styled, { css } from "styled-components";

const getAlignValue = (value) => {
  switch (value) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "center":
      return "center";
    case "space-between":
      return "space-between";
    case "space-around":
      return "space-around";
    default:
      return null;
  }
};

export const flex = css`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${getAlignValue(justifyContent)};`}
  ${({ alignItems }) =>
    alignItems && `align-items: ${getAlignValue(alignItems)};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ position }) => position && `position: ${position};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ css }) => css && css}
`;

const Flex = styled.div`
  ${flex}
`;

export const FlexArticle = styled.article`
  ${flex}
`;

export const FlexSection = styled.section`
  ${flex}
`;

export const FlexMain = styled.main`
  ${flex}
`;

export const FlexSpan = styled.span`
  ${flex}
`;

export const FlexNav = styled.nav`
  position: fixed;
  top: 0;
  background-position: center;
  backgorund-size: cover;
  ${flex};
`;

export default Flex;

// background-image: url(https://www.worldofwallpaper.com/media/catalog/product/m/a/mar128_marvel_comic_strip_wallpaper_black_white_ae1.jpg);
// background-image: url(https://cdn.wallpapersafari.com/64/6/GI0ZzL.jpg);

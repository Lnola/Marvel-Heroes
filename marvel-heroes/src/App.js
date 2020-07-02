import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "./components/common/Search";
import List from "./components/common/List";
import Loading from "./components/common/Loading";
import { NavCss, ContentCss } from "./components/styled/App";
import { FlexMain, FlexSection, FlexNav } from "./components/styled/Flex";
import { SET_BOOKMARKED_CHARACTERS } from "./store/redux";
import "./styles.css";

const App = () => {
  const charactersArray = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_BOOKMARKED_CHARACTERS });
  }, [dispatch]);

  return (
    <>
      <FlexNav
        width="100%"
        alignItems="center"
        justifyContent="center"
        css={NavCss}
      >
        <Search />
      </FlexNav>

      <FlexMain width="100%" justifyContent="center">
        <FlexSection width="65%" justifyContent="center" css={ContentCss}>
          {charactersArray && charactersArray.length !== 0 ? (
            <List />
          ) : (
            <Loading />
          )}
        </FlexSection>
      </FlexMain>
    </>
  );
};

export default App;

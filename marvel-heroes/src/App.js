import React, { useEffect, useState } from "react";
import { getCharacters } from "./services/characters";
import Character from "./components/common/Character";
import { FlexMain, FlexSection, FlexNav } from "./components/styled/Flex";
import "./styles.css";
import Search from "./components/common/Search";
import styled, { css } from "styled-components";
import Background from "./assets/images/background.png";

const NoCharacters = styled.span`
  position: absolute;
  top: 50%;
`;

const NavCss = css`
  position: fixed;
  top: 0;
  background-image: url(${Background});
  background-size: 10%;
  background-position: center;
  background-color: white;
  border-bottom: 1px solid black;
  z-index: 1;
`;

const ContentCss = css`
  overflow: visible;
`;

const App = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    setCharactersArray(JSON.parse(localStorage.getItem("bookmarks")));
  }, []);

  const searchForCharacter = (input) => {
    setCharactersArray([]);
    getCharacters(input).then(({ data }) =>
      setCharactersArray(data.data.results)
    );
  };

  return (
    <>
      <FlexNav
        height="19%"
        width="100%"
        alignItems="center"
        justifyContent="center"
        css={NavCss}
      >
        <Search
          searchForCharacter={searchForCharacter}
          setCharactersArray={setCharactersArray}
        />
      </FlexNav>

      <FlexMain width="100%" justifyContent="center" margin="12% 0 0 0">
        <FlexSection
          width="65%"
          justifyContent="space-around"
          wrap="wrap"
          css={ContentCss}
        >
          {charactersArray && charactersArray.length !== 0 ? (
            charactersArray.map((character, index) => (
              <Character key={index} character={character} />
            ))
          ) : (
            <NoCharacters>Search for characters...</NoCharacters>
          )}
        </FlexSection>
      </FlexMain>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Character from "./components/common/Character";
import Search from "./components/common/Search";
import { FlexMain, FlexSection, FlexNav } from "./components/styled/Flex";
import { NoCharacters, NavCss, ContentCss } from "./components/styled/App";
import { setCharactersToLocalStorage } from "./utils/setCharactersToLocalStorage";
import { getCharacters } from "./services/characters";
import "./styles.css";

const App = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    setCharactersToLocalStorage(setCharactersArray);
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

      <FlexMain width="100%" justifyContent="center">
        <FlexSection
          width="65%"
          justifyContent="space-around"
          wrap="wrap"
          css={ContentCss}
        >
          {charactersArray && charactersArray.length !== 0 ? (
            charactersArray.map((character, index) => (
              <Character
                key={index}
                character={character}
                setCharactersArray={setCharactersArray}
              />
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

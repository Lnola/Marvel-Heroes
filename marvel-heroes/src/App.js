import React, { useEffect, useState } from "react";
import { getCharacters } from "./services/characters";
import Character from "./components/common/Character";
import { FlexMain, FlexSection, FlexNav } from "./components/styled/Flex";
import "./styles.css";
import Search from "./components/common/Search";
import styled from "styled-components";

const NoCharacters = styled.span`
  position: absolute;
  top: 50%;
`;

const App = () => {
  const [charactersArray, setCharactersArray] = useState([]);

  useEffect(() => {
    searchForCharacter();
  }, []);

  const searchForCharacter = (input) => {
    getCharacters(input).then(({ data }) =>
      setCharactersArray(data.data.results)
    );
  };

  return (
    <>
      <FlexNav
        height="25%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Search searchForCharacter={searchForCharacter} />
      </FlexNav>

      <FlexMain width="100%" justifyContent="center" margin="14% 0 0 0">
        <FlexSection width="65%" justifyContent="space-around" wrap="wrap">
          {charactersArray.length !== 0 ? (
            charactersArray.map((character, index) => (
              <Character key={index} character={character} />
            ))
          ) : (
            <NoCharacters>No Characters...</NoCharacters>
          )}
        </FlexSection>
      </FlexMain>
    </>
  );
};

export default App;

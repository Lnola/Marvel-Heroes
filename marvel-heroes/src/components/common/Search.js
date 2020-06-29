import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 30%;
  height: 35%;
  font-size: 100%;
  padding: 1%;
  box-sizing: border-box;
  border: 1px solid #000;

  :focus {
    outline: none;
  }
`;

const Search = ({ searchForCharacter, setCharactersArray }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    e.target.value.length !== 0
      ? searchForCharacter(e.target.value)
      : setCharactersArray(JSON.parse(localStorage.getItem("bookmarks")));
  };

  return <StyledInput value={input} onChange={handleInputChange} autoFocus />;
};

export default Search;

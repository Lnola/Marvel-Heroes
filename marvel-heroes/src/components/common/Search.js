import React, { useState } from "react";
import { StyledInput } from "../styled/Search";

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

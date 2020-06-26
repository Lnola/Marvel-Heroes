import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 30%;
  height: 30%;
  font-size: 100%;
  padding: 1%;
  box-sizing: border-box;
  border: 1px solid #000;

  :focus {
    outline: none;
  }
`;

const Search = ({ searchForCharacter }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    searchForCharacter(e.target.value);
  };

  return <StyledInput value={input} onChange={handleInputChange} autoFocus />;
};

export default Search;

import styled from "styled-components";

export const StyledInput = styled.input`
  width: 30%;
  height: 35%;
  font-size: 100%;
  padding: 1%;
  box-sizing: border-box;
  border: 1px solid #000;

  :focus {
    outline: none;
  }

  @media (max-width: 600px) {
    width: 45%;
  }
`;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledInput } from "../styled/Search";
import {
  FETCH_CHARACTERS,
  SET_INPUT,
  CLEAR_CHARACTERS,
  UPDATE_START_INDEX,
} from "../../store/redux";

const Search = () => {
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch({ type: SET_INPUT, payload: e.target.value });
    dispatch({ type: CLEAR_CHARACTERS });
    dispatch({ type: UPDATE_START_INDEX, payload: 0 });
    dispatch({
      type: FETCH_CHARACTERS,
      nameStartsWith: e.target.value,
      startIndex: 0,
    });
  };

  return <StyledInput value={input} onChange={handleInputChange} autoFocus />;
};

export default Search;

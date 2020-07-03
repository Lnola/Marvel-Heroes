import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Character from "./Character";
import Flex from "../styled/Flex";
import { FETCH_CHARACTERS } from "../../store/redux";

const List = () => {
  const charactersArray = useSelector((state) => state.characters);
  const input = useSelector((state) => state.input);
  const startIndex = useSelector((state) => state.startIndex);
  const hasMore = useSelector((state) => state.hasMore);
  const dispatch = useDispatch();

  const fetchMoreCharacters = () => {
    dispatch({
      type: FETCH_CHARACTERS,
      nameStartsWith: input,
      startIndex: startIndex,
    });
  };

  return (
    <InfiniteScroll
      dataLength={charactersArray.length}
      next={fetchMoreCharacters}
      hasMore={hasMore}
      loader={
        <Flex width="100%" justifyContent="center">
          <ReactLoading type="bubbles" color="grey" />
        </Flex>
      }
    >
      {charactersArray.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </InfiniteScroll>
  );
};

export default List;

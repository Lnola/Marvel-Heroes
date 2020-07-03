import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import { NoCharacters } from "../styled/App";

const Loading = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <NoCharacters>
      {isLoading ? (
        <ReactLoading type="bubbles" color="grey" />
      ) : (
        <>No characters...</>
      )}
    </NoCharacters>
  );
};

export default Loading;

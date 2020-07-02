import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { fetchCharactersSaga } from "./saga";
import { getBookmarkedCharacters } from "../utils/bookmarkedCharacters";
import { addEmptyCharacters } from "../utils/addEmptyCharacters";

export const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";
export const FETCH_FAILED = "FETCH_FAILED";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const SET_BOOKMARKED_CHARACTERS = "SET_BOOKMARKED_CHARACTERS";
export const CLEAR_CHARACTERS = "CLEAR_CHARACTERS";
export const SET_INPUT = "SET_INPUT";
export const UPDATE_START_INDEX = "UPDATE_START_INDEX";
export const UPDATE_HAS_MORE = "UPDATE_HAS_MORE";
export const UPDATE_IS_LOADING = "UPDATE_IS_LOADING";

const initialState = {
  characters: [],
  input: "",
  message: "",
  startIndex: 0,
  hasMore: true,
  isLoading: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCEEDED:
      return {
        ...state,
        characters: { ...state }.characters.concat(
          addEmptyCharacters(payload.data.data.results)
        ),
      };

    case FETCH_FAILED:
      return { ...state, message: payload };

    case SET_BOOKMARKED_CHARACTERS:
      return {
        ...state,
        characters: addEmptyCharacters(getBookmarkedCharacters()),
        hasMore: false,
      };

    case CLEAR_CHARACTERS:
      return { ...state, characters: [] };

    case SET_INPUT:
      return { ...state, input: payload };

    case UPDATE_START_INDEX:
      return { ...state, startIndex: payload };

    case UPDATE_HAS_MORE:
      return { ...state, hasMore: payload };

    case UPDATE_IS_LOADING:
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchCharactersSaga);

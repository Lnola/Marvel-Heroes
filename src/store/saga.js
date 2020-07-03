import { call, put, takeLatest } from "redux-saga/effects";
import { getCharacters } from "../services/characters";
import {
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  FETCH_CHARACTERS,
  SET_BOOKMARKED_CHARACTERS,
  UPDATE_START_INDEX,
  UPDATE_HAS_MORE,
  UPDATE_IS_LOADING,
} from "./redux";

function* fetchCharacters({ nameStartsWith, startIndex }) {
  if (nameStartsWith.length === 0)
    yield put({ type: SET_BOOKMARKED_CHARACTERS });
  else
    try {
      const characters = yield call(getCharacters, nameStartsWith, startIndex);

      if (characters.data.data.results.length === 0)
        yield put({ type: UPDATE_IS_LOADING, payload: false });
      else yield put({ type: UPDATE_IS_LOADING, payload: true });

      if (characters.data.data.results.length < 20)
        yield put({ type: UPDATE_HAS_MORE, payload: false });
      else yield put({ type: UPDATE_HAS_MORE, payload: true });

      yield put({ type: FETCH_SUCCEEDED, payload: characters });
      yield put({ type: UPDATE_START_INDEX, payload: startIndex + 20 });
    } catch (e) {
      yield put({ type: FETCH_FAILED, payload: e.message });
    }
}

export function* fetchCharactersSaga() {
  yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
}

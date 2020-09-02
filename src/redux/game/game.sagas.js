import { takeLatest, put, all, call } from "redux-saga/effects";

import { GameActionTypes } from "./game.types";
import {
  getGameSuccess,
  getGameFailure,
  getPopularNowSuccess,
  getPopularNowFailure,
  getMostAnticipatedSuccess,
  getMostAnticipatedFailure,
  getRecentlyReleasedSuccess,
  getRecentlyReleasedFailure,
  getComingSoonSuccess,
  getComingSoonFailure,
} from "./game.actions";
import {
  getGameApi,
  getPopularNowApi,
  getMostAnticipatedApi,
  getRecentlyReleasedApi,
  getComingSoonApi,
} from "../api/game.api";

function* getGame({ payload: { gameSlug } }) {
  try {
    const { data } = yield call(getGameApi, gameSlug);
    yield put(getGameSuccess(data));
  } catch (error) {
    yield put(getGameFailure(error.response.data));
  }
}

function* getPopularNow() {
  try {
    const { data } = yield call(getPopularNowApi);
    yield put(getPopularNowSuccess(data));
  } catch (error) {
    yield put(getPopularNowFailure(error.response.data));
  }
}

function* getMostAnticipated() {
  try {
    const { data } = yield call(getMostAnticipatedApi);
    yield put(getMostAnticipatedSuccess(data));
  } catch (error) {
    yield put(getMostAnticipatedFailure(error.response.data));
  }
}

function* getRecentlyReleased() {
  try {
    const { data } = yield call(getRecentlyReleasedApi);
    yield put(getRecentlyReleasedSuccess(data));
  } catch (error) {
    yield put(getRecentlyReleasedFailure(error.response.data));
  }
}

function* getComingSoon() {
  try {
    const { data } = yield call(getComingSoonApi);
    yield put(getComingSoonSuccess(data));
  } catch (error) {
    yield put(getComingSoonFailure(error.response.data));
  }
}

function* onGetGameStart() {
  yield takeLatest(GameActionTypes.GET_GAME_START, getGame);
}

function* onGetPopularNow() {
  yield takeLatest(GameActionTypes.GET_POPULAR_NOW_START, getPopularNow);
}

function* onGetMostAnticipated() {
  yield takeLatest(
    GameActionTypes.GET_MOST_ANTICIPATED_START,
    getMostAnticipated
  );
}

function* onGetRecentlyReleased() {
  yield takeLatest(
    GameActionTypes.GET_RECENTLY_RELEASED_START,
    getRecentlyReleased
  );
}

function* onGetComingSoon() {
  yield takeLatest(GameActionTypes.GET_COMING_SOON_START, getComingSoon);
}

export function* gameSagas() {
  yield all([
    call(onGetGameStart),
    call(onGetPopularNow),
    call(onGetMostAnticipated),
    call(onGetRecentlyReleased),
    call(onGetComingSoon),
  ]);
}

import { takeLatest, put, all, call } from "redux-saga/effects";

import { NewsActionTypes } from "./news.types";
import { getNewsSuccess, getNewsFailure } from "./news.actions";
import { getNewsApi } from "../api/news.api";

function* getNews({ payload: { urlParams } }) {
  try {
    const { data } = yield call(getNewsApi, urlParams);
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFailure(error.response.data));
  }
}

function* onGetNewsStart() {
  yield takeLatest(NewsActionTypes.GET_NEWS_START, getNews);
}

export function* newsSagas() {
  yield all([call(onGetNewsStart)]);
}

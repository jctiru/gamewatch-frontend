import { all, call } from "redux-saga/effects";

import { gameSagas } from "./game/game.sagas";
import { newsSagas } from "./news/news.sagas";

export default function* rootSaga() {
  yield all([call(gameSagas), call(newsSagas)]);
}

import { combineReducers } from "redux";

import gameReducer from "./game/game.reducer";
import newsReducer from "./news/news.reducer";

const rootReducer = combineReducers({
  game: gameReducer,
  news: newsReducer,
});

export default rootReducer;

import { NewsActionTypes } from "./news.types";

const INITIAL_STATE = {
  news: [],
  isNewsLoading: false,
  newsError: null,
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS_START:
      return {
        ...state,
        isNewsLoading: true,
        newsError: null,
      };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isNewsLoading: false,
        gameError: null,
      };
    case NewsActionTypes.CRUD_NEWS_STATUS_RESET:
      return {
        ...state,
        newsError: null,
      };
    default:
      return state;
  }
};

export default newsReducer;

import {} from "./news.types";
import { NewsActionTypes } from "../news/news.types";

export const getNewsStart = (urlParams) => ({
  type: NewsActionTypes.GET_NEWS_START,
  payload: urlParams,
});

export const getNewsSuccess = (news) => ({
  type: NewsActionTypes.GET_NEWS_SUCCESS,
  payload: news,
});

export const getNewsFailure = (error) => ({
  type: NewsActionTypes.GET_NEWS_FAILURE,
  payload: error,
});

export const crudNewsStatusReset = () => ({
  type: NewsActionTypes.CRUD_NEWS_STATUS_RESET,
});

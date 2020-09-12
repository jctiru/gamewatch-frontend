import { createSelector } from "reselect";

const selectNews = (state) => state.news;

export const selectNewsList = createSelector([selectNews], (news) => news.news);

export const selectIsNewsLoading = createSelector(
  [selectNews],
  (news) => news.isNewsLoading
);

export const selectNewsError = createSelector(
  [selectNews],
  (news) => news.newsError
);

export const selectAreInitialNewsLoaded = createSelector(
  [selectNews],
  (news) => !!news.news.length
);

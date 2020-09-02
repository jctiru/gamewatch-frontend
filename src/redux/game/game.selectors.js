import { createSelector } from "reselect";

const selectGame = (state) => state.game;

export const selectGameDetails = createSelector(
  [selectGame],
  (game) => game.game
);

export const selectIsGameLoading = createSelector(
  [selectGame],
  (game) => game.isGameLoading
);

export const selectGameError = createSelector(
  [selectGame],
  (game) => game.gameError
);

export const selectPopularNow = createSelector(
  [selectGame],
  (game) => game.popularNow
);

export const selectIsPopularNowLoading = createSelector(
  [selectGame],
  (game) => game.isPopularNowLoading
);

export const selectPopularNowError = createSelector(
  [selectGame],
  (game) => game.popularNowError
);

export const selectMostAnticipated = createSelector(
  [selectGame],
  (game) => game.mostAnticipated
);

export const selectIsMostAnticipatedLoading = createSelector(
  [selectGame],
  (game) => game.isMostAnticipatedLoading
);

export const selectMostAnticipatedError = createSelector(
  [selectGame],
  (game) => game.mostAnticipatedError
);

export const selectRecentlyReleased = createSelector(
  [selectGame],
  (game) => game.recentlyReleased
);

export const selectIsRecentlyReleasedLoading = createSelector(
  [selectGame],
  (game) => game.isRecentlyReleasedLoading
);

export const selectRecentlyReleasedError = createSelector(
  [selectGame],
  (game) => game.recentlyReleasedError
);

export const selectComingSoon = createSelector(
  [selectGame],
  (game) => game.comingSoon
);

export const selectIsComingSoonLoading = createSelector(
  [selectGame],
  (game) => game.isComingSoonLoading
);

export const selectComingSoonError = createSelector(
  [selectGame],
  (game) => game.comingSoonError
);

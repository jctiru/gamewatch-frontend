import { GameActionTypes } from "./game.types";

export const getGameStart = (gameSlug) => ({
  type: GameActionTypes.GET_GAME_START,
  payload: gameSlug,
});

export const getGameSuccess = (game) => ({
  type: GameActionTypes.GET_GAME_SUCCESS,
  payload: game,
});

export const getGameFailure = (error) => ({
  type: GameActionTypes.GET_GAME_FAILURE,
  payload: error,
});

export const getPopularNowStart = () => ({
  type: GameActionTypes.GET_POPULAR_NOW_START,
});

export const getPopularNowSuccess = (popularNow) => ({
  type: GameActionTypes.GET_POPULAR_NOW_SUCCESS,
  payload: popularNow,
});

export const getPopularNowFailure = (error) => ({
  type: GameActionTypes.GET_POPULAR_NOW_FAILURE,
  payload: error,
});

export const getMostAnticipatedStart = () => ({
  type: GameActionTypes.GET_MOST_ANTICIPATED_START,
});

export const getMostAnticipatedSuccess = (mostAnticipated) => ({
  type: GameActionTypes.GET_MOST_ANTICIPATED_SUCCESS,
  payload: mostAnticipated,
});

export const getMostAnticipatedFailure = (error) => ({
  type: GameActionTypes.GET_MOST_ANTICIPATED_FAILURE,
  payload: error,
});

export const getRecentlyReleasedStart = () => ({
  type: GameActionTypes.GET_RECENTLY_RELEASED_START,
});

export const getRecentlyReleasedSuccess = (recentlyReleased) => ({
  type: GameActionTypes.GET_RECENTLY_RELEASED_SUCCESS,
  payload: recentlyReleased,
});

export const getRecentlyReleasedFailure = (error) => ({
  type: GameActionTypes.GET_RECENTLY_RELEASED_FAILURE,
  payload: error,
});

export const getComingSoonStart = () => ({
  type: GameActionTypes.GET_COMING_SOON_START,
});

export const getComingSoonSuccess = (comingSoon) => ({
  type: GameActionTypes.GET_COMING_SOON_SUCCESS,
  payload: comingSoon,
});

export const getComingSoonFailure = (error) => ({
  type: GameActionTypes.GET_COMING_SOON_FAILURE,
  payload: error,
});

export const crudGameStatusReset = () => ({
  type: GameActionTypes.CRUD_GAME_STATUS_RESET,
});

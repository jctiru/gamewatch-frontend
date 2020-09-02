import { GameActionTypes } from "./game.types";

const INITIAL_STATE = {
  game: null,
  popularNow: [],
  mostAnticipated: [],
  recentlyReleased: [],
  comingSoon: [],
  isGameLoading: false,
  isPopularNowLoading: false,
  isMostAnticipatedLoading: false,
  isRecentlyReleasedLoading: false,
  isComingSoonLoading: false,
  gameError: null,
  popularNowError: null,
  mostAnticipatedError: null,
  recentlyReleasedError: null,
  comingSoonError: null,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GameActionTypes.GET_GAME_START:
      return {
        ...state,
        isGameLoading: true,
        gameError: null,
      };
    case GameActionTypes.GET_GAME_SUCCESS:
      return {
        ...state,
        game: action.payload,
        isGameLoading: false,
        gameError: null,
      };
    case GameActionTypes.GET_POPULAR_NOW_START:
      return {
        ...state,
        isPopularNowLoading: true,
        popularNowError: null,
      };
    case GameActionTypes.GET_POPULAR_NOW_SUCCESS:
      return {
        ...state,
        popularNow: action.payload,
        isPopularNowLoading: false,
        popularNowError: null,
      };
    case GameActionTypes.GET_MOST_ANTICIPATED_START:
      return {
        ...state,
        isMostAnticipatedLoading: true,
        mostAnticipatedError: null,
      };
    case GameActionTypes.GET_MOST_ANTICIPATED_SUCCESS:
      return {
        ...state,
        mostAnticipated: action.payload,
        isMostAnticipatedLoading: false,
        mostAnticipatedError: null,
      };
    case GameActionTypes.GET_RECENTLY_RELEASED_START:
      return {
        ...state,
        isRecentlyReleasedLoading: true,
        recentlyReleasedError: null,
      };
    case GameActionTypes.GET_RECENTLY_RELEASED_SUCCESS:
      return {
        ...state,
        recentlyReleased: action.payload,
        isRecentlyReleasedLoading: false,
        recentlyReleasedError: null,
      };
    case GameActionTypes.GET_COMING_SOON_START:
      return {
        ...state,
        isComingSoonLoading: true,
        comingSoonError: null,
      };
    case GameActionTypes.GET_COMING_SOON_SUCCESS:
      return {
        ...state,
        comingSoon: action.payload,
        isComingSoonLoading: false,
        comingSoonError: null,
      };
    case GameActionTypes.CRUD_GAME_STATUS_RESET:
      return {
        ...state,
        gameError: null,
        popularNowError: null,
        mostAnticipatedError: null,
        mostRecentError: null,
        recentlyReleasedError: null,
        comingSoonError: null,
      };
    default:
      return state;
  }
};

export default gameReducer;

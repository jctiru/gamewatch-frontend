import axios from "axios";
import config from "../config";

export const getGameApi = (gameSlug) => {
  return axios({
    url: `${config.apiUrl}/game-catalog/games/${gameSlug}`,
    method: "get",
  });
};

export const getPopularNowApi = () => {
  return axios({
    url: `${config.apiUrl}/game-catalog/popular-now`,
    method: "get",
  });
};

export const getMostAnticipatedApi = () => {
  return axios({
    url: `${config.apiUrl}/game-catalog/most-anticipated`,
    method: "get",
  });
};

export const getRecentlyReleasedApi = () => {
  return axios({
    url: `${config.apiUrl}/game-catalog/recently-released`,
    method: "get",
  });
};

export const getComingSoonApi = () => {
  return axios({
    url: `${config.apiUrl}/game-catalog/coming-soon`,
    method: "get",
  });
};

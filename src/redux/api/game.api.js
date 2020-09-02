import axios from "axios";

export const getGameApi = (gameSlug) => {
  return axios({
    url: `/game-catalog/games/${gameSlug}`,
    method: "get",
  });
};

export const getPopularNowApi = () => {
  return axios({
    url: `/game-catalog/popular-now`,
    method: "get",
  });
};

export const getMostAnticipatedApi = () => {
  return axios({
    url: `/game-catalog/most-anticipated`,
    method: "get",
  });
};

export const getRecentlyReleasedApi = () => {
  return axios({
    url: `/game-catalog/recently-released`,
    method: "get",
  });
};

export const getComingSoonApi = () => {
  return axios({
    url: `/game-catalog/coming-soon`,
    method: "get",
  });
};

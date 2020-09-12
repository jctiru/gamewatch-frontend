import axios from "axios";

export const getNewsApi = (urlParams) => {
  return axios({
    url: `/game-news${urlParams ? urlParams : ""}`,
    method: "get",
  });
};

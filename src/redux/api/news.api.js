import axios from "axios";
import config from "../config";

export const getNewsApi = (urlParams) => {
  return axios({
    url: `${config.apiUrl}/game-news${urlParams ? urlParams : ""}`,
    method: "get",
  });
};

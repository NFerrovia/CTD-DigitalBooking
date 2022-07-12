import { getRefreshToken } from "../utils/LocalStorage";
import { url_base } from "./fetchLink";

export const fetchAccessToken = async () => {
  try {
    const response = await fetch(`${url_base}/api/token/refresh`, {
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

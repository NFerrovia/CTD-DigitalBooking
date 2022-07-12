import { url_base } from "../fetchLink";
export const fetchLogin = async (credentials) => {
  try {
    const response = await fetch(
      `${url_base}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: new URLSearchParams(credentials),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

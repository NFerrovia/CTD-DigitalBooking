import { url_base } from "../fetchLink";
export const fetchSignUp = async (credentials) => {
  try {
    const response = await fetch(
      `${url_base}/api/user/save`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

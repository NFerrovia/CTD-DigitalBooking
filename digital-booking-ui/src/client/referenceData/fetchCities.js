import { url_base } from "../fetchLink";
export const fetchCities = async () => {
  try {
    const response = await fetch(`${url_base}/cities`);
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

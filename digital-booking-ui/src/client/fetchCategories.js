import { url_base } from "./fetchLink";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${url_base}/categories`);
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

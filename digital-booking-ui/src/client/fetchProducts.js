import { url_base } from "./fetchLink";
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${url_base}/products`);
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

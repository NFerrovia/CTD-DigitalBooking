import { url_base } from "./fetchLink";

export const fetchProductsByCategory = async (id) => {
  try {
    const response = await fetch(`${url_base}/products/allCategory/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

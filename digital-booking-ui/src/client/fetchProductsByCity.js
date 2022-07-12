import { url_base } from "./fetchLink";

export const fetchProductsByCity = async (id) => {
  try {
    const response = await fetch(`${url_base}/products/allCity/${id}`);
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

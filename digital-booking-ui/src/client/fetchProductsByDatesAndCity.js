import { url_base } from "./fetchLink";
export const fetchProductsByDatesAndCity = async (body) => {
  try {
    const response = await fetch(
      `${url_base}/products/allAvailableDates/city`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

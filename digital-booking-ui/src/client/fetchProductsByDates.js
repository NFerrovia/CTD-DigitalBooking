import { url_base } from "./fetchLink";
export const fetchProductsByDates = async (dates) => {
  try {
    const response = await fetch(`${url_base}/products/allAvailableDates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dates),
    });
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

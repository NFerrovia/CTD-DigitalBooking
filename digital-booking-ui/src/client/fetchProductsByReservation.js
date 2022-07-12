import { url_base } from "./fetchLink";
export const fetchProductByReservation = async (id) => {
  try {
    const response = await fetch(`${url_base}/bookings/findByUserId/${id}`);
    const data = await response.json();
    if (data.error) return [];
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

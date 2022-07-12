import { getAuthToken } from "../utils/LocalStorage";
import { url_base } from "./fetchLink";

export const fetchReservation = async (booking) => {
  try {
    const response = await fetch(`${url_base}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(booking),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

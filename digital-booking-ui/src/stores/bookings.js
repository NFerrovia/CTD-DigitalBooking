import { fetchProductByReservation } from "../client/fetchProductsByReservation";
import { create } from "../utils/createStore";

const INITIAL_STATE = {
  data: [],
  loading: null,
  loaded: null,
  error: "",
};

const createBookingStore = () =>
  create("search")((set, get) => ({
    ...INITIAL_STATE,

    doFetchBookings: async (userId) => {
      set({ loaded: false, loading: true });
      const response = await fetchProductByReservation(userId);
      set({ loaded: true, loading: false, data: response });
    },
  }));

export const useBookingStore = createBookingStore();

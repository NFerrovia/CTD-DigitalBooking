import { fetchReservation } from "../client/fetchReservation";
import { create } from "../utils/createStore";

const INITIAL_STATE = {
  name: "",
  surname: "",
  email: "",
  city: "",
  productId: null,
  dateRange: [null, null],
  arrivalTime: "07:30",
};

const createReservationSotre = () =>
  create("reservation")((set, get) => ({
    ...INITIAL_STATE,
    loading: false,
    loaded: false,
    error: "",

    setName: (name) => set({ name }),
    setSurname: (surname) => set({ surname }),
    setEmail: (email) => set({ email }),
    setCity: (city) => set({ city }),
    setArrivalTime: (arrivalTime) => set({ arrivalTime }),
    setProductId: (productId) => set({ productId }),

    setDateRange: (dateRange) => set({ dateRange }),

    setError: (error) => set({ error }),
    setloading: (loading) => set({ loading }),
    setLoaded: (loaded) => set({ loaded }),

    setDefaultValues: ({ name, surname, email }) =>
      set({ name, surname, email }),

    getErrorDates: () => {
      const [startDate, endDate] = get().dateRange;

      return !startDate || !endDate;
    },

    doReservation: async (userId) => {
      const { dateRange, arrivalTime, productId } = get();
      let startDay = dateRange[0].getUTCDate();
      let startMonth = dateRange[0].getUTCMonth() + 1;
      const startYear = dateRange[0].getUTCFullYear();

      if (startMonth < 10) {
        startMonth = `0${startMonth}`;
      }
      if (startDay < 10) {
        startDay = `0${startDay}`;
      }

      let endDay = dateRange[1].getUTCDate();
      let endMonth = dateRange[1].getUTCMonth() + 1;
      const endYear = dateRange[1].getUTCFullYear();

      const startDate = `${startYear}-${startMonth}-${startDay}`;

      if (endMonth < 10) {
        endMonth = `0${endMonth}`;
      }
      if (endDay < 10) {
        endDay = `0${endDay}`;
      }

      const endDate = `${endYear}-${endMonth}-${endDay}`;

      const hour = `${arrivalTime}:00`;

      const data = {
        startDate,
        endDate,
        hour,
        vaccinated: true,
        productId,
        userId: userId,
      };

      const response = await fetchReservation(data);

      return response;
    },

    getFormValues: () => {
      return {
        name: get().name,
        surname: get().surname,
        email: get().email,
        city: get().city,
        startDate: get().dateRange[0],
        endDate: get().dateRange[1],
        arrivalTime: get().arrivalTime,
      };
    },
  }));

export const useReservationStore = createReservationSotre();

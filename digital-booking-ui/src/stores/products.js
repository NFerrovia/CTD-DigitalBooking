import { fetchCategories } from "../client/fetchCategories";
import { fetchProducts } from "../client/fetchProducts";
import { fetchProductsByCategory } from "../client/fetchProductsByCategory";
import { fetchProductsByDates } from "../client/fetchProductsByDates";
import { fetchProductsByDatesAndCity } from "../client/fetchProductsByDatesAndCity";
import { fetchProductsByCity } from "../client/fetchProductsByCity";
import { create } from "../utils/createStore";

const createProductsStore = () =>
  create("products")((set, get) => ({
    data: [],
    dataBackUp: [],
    loading: false,
    loaded: false,

    fetchData: async () => {
      set((state) => ({ ...state, loading: true }));
      const response = await fetchProducts();
      set({
        data: response,
        dataBackUp: response,
        loaded: true,
        loading: false,
      });
      return;
    },
    fetchDataByCategory: async (id) => {
      set((state) => ({ ...state, loading: true }));
      const response = await fetchProductsByCategory(id);
      set({
        data: response,
        loaded: true,
        loading: false,
      });
      return;
    },
    fetchDataByLocation: async (location) => {
      set((state) => ({ ...state, loading: true, loaded: false }));
      const response = await fetchProductsByCity(location.id);
      set({ data: response, loading: false, loaded: true });
    },
    fetchDataByDates: async (dates) => {
      set((state) => ({ ...state, loading: true, loaded: false }));

      const datesFormatted = formatDates(dates);

      const response = await fetchProductsByDates(datesFormatted);
      set({ data: response, loaded: true, loading: false });
    },

    fetchDataByDatesAndCity: async (location, dates) => {
      set((state) => ({ ...state, loading: true, loaded: false }));
      const datesFormatted = formatDates(dates);
      const data = {
        ...datesFormatted,
        cityId: location.id,
      };
      const response = await fetchProductsByDatesAndCity(data);
      set({ data: response, loaded: true, loading: false });
    },

    clearFilter: () =>
      set((state) => ({
        ...state,
        data: state.dataBackUp,
      })),
  }));

export const useProductsStore = createProductsStore();

const formatDates = (dates) => {
  let startDay = dates[0].getUTCDate();
  let startMonth = dates[0].getUTCMonth() + 1;
  const startYear = dates[0].getUTCFullYear();

  if (startMonth < 10) {
    startMonth = `0${startMonth}`;
  }
  if (startDay < 10) {
    startDay = `0${startDay}`;
  }

  let endDay = dates[1].getUTCDate();
  let endMonth = dates[1].getUTCMonth() + 1;
  const endYear = dates[1].getUTCFullYear();

  const startDate = `${startYear}-${startMonth}-${startDay}`;

  if (endMonth < 10) {
    endMonth = `0${endMonth}`;
  }
  if (endDay < 10) {
    endDay = `0${endDay}`;
  }

  const endDate = `${endYear}-${endMonth}-${endDay}`;

  const data = {
    startDate,
    endDate,
  };
  return data;
};

// https://countriesnow.space/api/v0.1/countries/population/cities
import { fetchCities } from "../client/referenceData/fetchCities";
import { create } from "../utils/createStore";

const createCitiesStore = () =>
  create("cities")((set, get) => ({
    data: [],
    loading: false,
    loaded: false,
    error: false,

    fetchData: async () => {
      set((state) => ({ ...state, loading: true }));
      try {
        const response = await fetchCities();
        set({ data: response, loaded: true, loading: false });
      } catch (e) {
        console.log("Error while fetching cities: ", e);
        set({
          data: [],
          loaded: true,
          loading: false,
          error: "Error while fetching Cities",
        });
      }
    },
  }));

export const useCitiesStore = createCitiesStore();

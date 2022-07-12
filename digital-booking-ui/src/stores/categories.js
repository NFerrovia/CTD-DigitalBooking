import { fetchCategories } from "../client/fetchCategories";
import { apiRequest } from "../client/mocks/categoriesMock";
import { create } from "../utils/createStore";

const createCategoriesStore = () =>
  create("categories")((set, get) => ({
    data: [],
    loading: false,
    loaded: false,
    filtered: null,

    setFilteredByCategory: (filtered) => set({ filtered }),
    clearFilter: () => set({ filtered: null }),

    fetchData: async () => {
      set((state) => ({ ...state, loading: true }));
      const response = await fetchCategories();
      set({ data: response, loaded: true, loading: false });
      return;
    },
  }));

export const useCategoriesStore = createCategoriesStore();

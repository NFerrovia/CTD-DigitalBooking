import { create } from "../utils/createStore";

const createSearchStore = () =>
  create("search")((set, get) => ({
    location: null,
    dates: [null, null],

    setLocation: (location) => set({ location }),
    setDates: (dates) => set({ dates }),
    resetState: () => set({ location: null, dates: [] }),
  }));

export const useSearchStore = createSearchStore();

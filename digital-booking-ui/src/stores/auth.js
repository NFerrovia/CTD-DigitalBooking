import { fetchAccessToken } from "../client/fetchAccessToken";
import { create } from "../utils/createStore";
import {
  getAuthToken,
  getRefreshToken,
  getUser,
  saveAuthToken,
  saveRefreshToken,
} from "../utils/LocalStorage";

const INITIAL_FROM_STATE = {
  name: "",
  surname: "",
  email: "",
  id: null,
  role: null,
};

// const INITIAL_FROM_STATE = {
//   name: "adro",
//   surname: "batman",
//   email: "tumama@gmail.com",
//   id: 1,
//   role: 1,
// };

const createAuthStore = () =>
  create("auth")((set, get) => ({
    ...INITIAL_FROM_STATE,
    cart: [],
    favorites: [],

    setName: (name) => set({ name }),
    setSurname: (surname) => set({ surname }),
    setEmail: (email) => set({ email }),
    setId: (id) => set({ id }),
    setRole: (role) => set({ role }),

    getValues: () => ({
      name: get().name,
      surname: get().surname,
      email: get().email,
    }),

    isAdmin: () => {
      return get().role === 1 || get().role === "1";
    },

    saveToken: (token) => saveAuthToken(token),

    getToken: () => getAuthToken(),

    getRefreshToken: () => getRefreshToken(),

    fetchNewAccesToken: async () => {
      const response = await fetchAccessToken();
      if (response.access_token) {
        const user = getUser();
        set({
          name: user.name,
          surname: user.lastName,
          email: user.email,
          role: user.role_id,
          id: user.user_id,
        });
        saveAuthToken(response.access_token);
        saveRefreshToken(response.refresh_token);
        return;
      }
      return;
    },

    resetState: () =>
      set({
        ...INITIAL_FROM_STATE,
        cart: [],
        favorites: [],
      }),
  }));

export const useAuthStore = createAuthStore();

import { fetchSignUp } from "../client/auth/fetchSignUp";
import { create } from "../utils/createStore";

const INITIAL_FROM_STATE = {
  name: "",
  surname: "",
  email: "",
  password: "",
  password2: "",
};

const createSignUpStore = () =>
  create("sign-up")((set, get) => ({
    ...INITIAL_FROM_STATE,
    loaded: false,
    loading: false,
    error: null,

    setName: (name) => set({ name }),
    setSurname: (surname) => set({ surname }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
    setPassword2: (password2) => set({ password2 }),
    setError: (error) => set({ error }),

    fetchSignUp: async () => {
      const { name, surname, email, password } = get();
      const credentials = {
        name: name,
        lastName: surname,
        userName: email,
        password: password,
      };
      const response = await fetchSignUp(credentials);
      if (!response?.name) {
        set({ error: "An error ocurred while creating your account" });
        return false;
      }
      return true;
    },

    resetState: () =>
      set({
        ...INITIAL_FROM_STATE,
        loaded: false,
        loading: false,
        error: null,
      }),
  }));

export const useSignUpStore = createSignUpStore();

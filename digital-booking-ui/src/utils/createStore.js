import createStore from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";
import { isString } from "./stringUtils";

const selectiveImmer = (mutator) =>
  typeof mutator === "function"
    ? produce(mutator) //lets use immer to apply changes
    : mutator; //lets just merge the states!

const immerMiddleware = (next) => (set, get) =>
  next(
    (mutator, replace, name) => set(selectiveImmer(mutator), replace, name),
    get
  );

const namingMiddleware = (next) => (set, get) =>
  next((mutator, replace, name) => {
    // Makes "replace" parameter optional
    if (isString(replace)) {
      name = replace;
      replace = false;
    }
    set(mutator, replace, name || "anonymous");
  }, get);

export const create = (storeName) => (fn) => {
  const useStore = createStore(
    devtools(immerMiddleware(namingMiddleware(fn)), {
      name: storeName,
    })
  );

  //Make store visible through window
  const visibleStores = window["_digitalBooking"] || {};
  visibleStores[storeName] = useStore;
  window["_digitalBooking"] = visibleStores;

  return useStore;
};

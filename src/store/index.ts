export { makeStore } from "./store";
export type { AppDispatch, AppStore, RootState } from "./store";
export { useAppDispatch, useAppSelector, useAppStore } from "./hooks";
export { StoreProvider } from "./provider";
export {
  setMobileNavOpen,
  toggleMobileNav,
  setOpenFaqIndex,
  toggleFaqIndex,
} from "./slices/uiSlice";

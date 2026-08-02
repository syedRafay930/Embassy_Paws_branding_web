import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  isMobileNavOpen: boolean;
  openFaqIndex: number | null;
};

const initialState: UiState = {
  isMobileNavOpen: false,
  openFaqIndex: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileNavOpen(state, action: PayloadAction<boolean>) {
      state.isMobileNavOpen = action.payload;
    },
    toggleMobileNav(state) {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    setOpenFaqIndex(state, action: PayloadAction<number | null>) {
      state.openFaqIndex = action.payload;
    },
    toggleFaqIndex(state, action: PayloadAction<number>) {
      state.openFaqIndex =
        state.openFaqIndex === action.payload ? null : action.payload;
    },
  },
});

export const {
  setMobileNavOpen,
  toggleMobileNav,
  setOpenFaqIndex,
  toggleFaqIndex,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

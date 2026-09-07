import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = {
  isMobileNavOpen: boolean;
  openFaqIndex: number | null;
  isQuoteModalOpen: boolean;
  isContactModalOpen: boolean;
};

const initialState: UiState = {
  isMobileNavOpen: false,
  isQuoteModalOpen: false,
  isContactModalOpen: false,
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
    setQuoteModalOpen(state, action: PayloadAction<boolean>) {
      state.isQuoteModalOpen = action.payload;
    },
    toggleQuoteModal(state) {
      state.isQuoteModalOpen = !state.isQuoteModalOpen;
    },
    setContactModalOpen(state, action: PayloadAction<boolean>) {
      state.isContactModalOpen = action.payload;
    },
    toggleContactModal(state) {
      state.isContactModalOpen = !state.isContactModalOpen;
    },
  },
});

export const {
  setMobileNavOpen,
  toggleMobileNav,
  setOpenFaqIndex,
  toggleFaqIndex,
  setQuoteModalOpen,
  toggleQuoteModal,
  setContactModalOpen,
  toggleContactModal,
} = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

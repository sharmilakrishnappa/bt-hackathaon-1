import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
export interface ConfigStateInterface {
  data: any;
}

// Define the initial state using that type
const initialState: ConfigStateInterface = {
  data: [],
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getStartingPageData = (state: RootState) => {
  const data = state.config.data;
  const startPageId = data.startPageId;
  return data.pages.find((page: any) => page.id === startPageId);
};

export const getMenuItemDetails = (itemKey: string) => (state: RootState) => {
  const data = state.config.data;
  return data.menuItems.find((menuItem: any) => menuItem.id === itemKey);
};

export const getPageDetails = (pageId: string) => (state: RootState) => {
  const data = state.config.data;
  return data.pages.find((page: any) => page.id === pageId);
};

export const { setData } = configSlice.actions;

export default configSlice.reducer;

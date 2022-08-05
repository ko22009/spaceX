import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import Launch from "../types/launch";

export interface LaunchState {
  data: Launch;
}

const initialState: LaunchState = {
  data: null,
};

export const detail = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Launch>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = detail.actions;
export const getData = (state: RootState) => state.detail.data;

export default detail.reducer;

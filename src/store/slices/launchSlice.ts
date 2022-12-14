import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Launch from "../types/launch";
import { RootState } from "../index";

export interface LaunchState {
  past: Launch[];
  future: Launch[];
  booking: Launch[];
  loading: boolean;
}

const initialState: LaunchState = {
  past: [],
  future: [],
  booking: [],
  loading: false,
};

export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    setPastLaunches: (state, action: PayloadAction<Launch[]>) => {
      state.past = action.payload;
    },
    setFutureLaunches: (state, action: PayloadAction<Launch[]>) => {
      state.future = action.payload;
    },
    bookingLaunch: (state, action: PayloadAction<Launch>) => {
      state.future = state.future.filter(
        (launch) => launch.id != action.payload.id
      );
      state.booking.push(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    unBookingLaunch(state, action: PayloadAction<Launch>) {
      state.booking = state.booking.filter(
        (launch) => launch.id != action.payload.id
      );
      if (new Date() > action.payload.date_utc) {
        state.past.push(action.payload);
      } else {
        state.future.push(action.payload);
      }
    },
  },
});

export const {
  setPastLaunches,
  setFutureLaunches,
  bookingLaunch,
  unBookingLaunch,
  setLoading,
} = launchSlice.actions;
export const getPastLaunches = (state: RootState) => state.launch.past;
export const getFutureLaunches = (state: RootState) => state.launch.future;
export const getBookingLaunch = (state: RootState) => state.launch.booking;
export const getLoading = (state: RootState) => state.launch.loading;

export default launchSlice.reducer;

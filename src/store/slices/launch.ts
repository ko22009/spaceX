import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import Launch from "../types/launch";

export interface LaunchState {
  past: Launch[];
  future: Launch[];
  booking: Launch[];
}

const initialState: LaunchState = {
  past: [],
  future: [],
  booking: [],
};

export const launch = createSlice({
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
      state.booking.push(action.payload);
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
} = launch.actions;
export const getPastLaunches = (state: RootState) => state.launch.past;
export const getFutureLaunches = (state: RootState) => state.launch.future;
export const getBookingLaunch = (state: RootState) => state.launch.booking;

export default launch.reducer;

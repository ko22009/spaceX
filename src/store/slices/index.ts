import { combineReducers } from "@reduxjs/toolkit";
import launch from "./launchSlice";

const rootReducer = combineReducers({
  launch,
});

export default rootReducer;

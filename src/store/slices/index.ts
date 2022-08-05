import { combineReducers } from "@reduxjs/toolkit";
import launch from "./launch";

const rootReducer = combineReducers({
  launch,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

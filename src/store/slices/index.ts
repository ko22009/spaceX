import { combineReducers } from "@reduxjs/toolkit";
import launch from "./launch";
import detail from "./detail";

const rootReducer = combineReducers({
  launch,
  detail,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

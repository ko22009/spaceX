import { all } from "redux-saga/effects";
import launchSagas from "./launchSagas";

export default function* rootSaga() {
  yield all([...launchSagas]);
}

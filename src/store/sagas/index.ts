import { all } from "redux-saga/effects";
import launchSagas from "./launch";

export default function* rootSaga() {
  yield all([...launchSagas]);
}

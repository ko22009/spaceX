import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as api from "../../api";
import { getFutureLaunchesType, getPastLaunchesType } from "../actions/launch";
import {
  setFutureLaunches,
  setPastLaunches,
  setLoading,
} from "../slices/launch";
import Launch from "../types/launch";

function* getPastLaunches() {
  try {
    yield put(setLoading(true));
    const response: Response = yield call(api.getPastLaunches);
    const result: Launch[] = yield response.json();
    yield put(setLoading(false));
    yield put(setPastLaunches(result));
  } catch (error) {
    yield put(setLoading(false));
    console.error(error);
  }
}

function* getFutureLaunches() {
  try {
    const response: Response = yield call(api.getFutureLaunches);
    const result: Launch[] = yield response.json();
    yield put(setFutureLaunches(result));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetPastLaunches() {
  yield takeEvery(getPastLaunchesType, getPastLaunches);
}

function* watchGetFutureLaunches() {
  yield takeEvery(getFutureLaunchesType, getFutureLaunches);
}

const launchSagas = [fork(watchGetPastLaunches), fork(watchGetFutureLaunches)];

export default launchSagas;

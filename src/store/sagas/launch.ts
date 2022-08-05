import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as api from "../../api";
import {
  bookingLaunchType,
  getDetailType,
  getFutureLaunchesType,
  getPastLaunchesType,
  unBookingLaunchType,
} from "../actions/launch";
import {
  setFutureLaunches,
  setPastLaunches,
  bookingLaunch,
  unBookingLaunch,
} from "../slices/launch";
import Launch from "../types/launch";
import { setData } from "../slices/detail";
import { PayloadAction } from "@reduxjs/toolkit";

function* getPastLaunches() {
  try {
    const response: Response = yield call(api.getPastLaunches);
    const result: Launch[] = yield response.json();
    yield put(setPastLaunches(result));
  } catch (error) {
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

function* getLaunch(action: PayloadAction<{ id: string }>) {
  try {
    const response: Response = yield call(api.getLaunch, action.payload.id);
    const result: Launch = yield response.json();
    yield put(setData(result));
  } catch (error) {
    console.error(error);
  }
}

function* bookingLaunchGenerator(action: PayloadAction<Launch>) {
  try {
    const result: Launch = yield call(api.bookLaunch, action.payload);
    yield put(bookingLaunch(result));
  } catch (error) {
    console.error(error);
  }
}

function* unBookingLaunchGenerator(action: PayloadAction<Launch>) {
  try {
    const result: Launch = yield call(api.unBookLaunch, action.payload);
    yield put(unBookingLaunch(result));
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

function* watchGetLaunch() {
  yield takeEvery(getDetailType, getLaunch);
}

function* watchBookingLaunchType() {
  yield takeEvery(bookingLaunchType, bookingLaunchGenerator);
}

function* watchUnBookingLaunchType() {
  yield takeEvery(unBookingLaunchType, unBookingLaunchGenerator);
}

const launchSagas = [
  fork(watchGetPastLaunches),
  fork(watchGetFutureLaunches),
  fork(watchGetLaunch),
  fork(watchBookingLaunchType),
  fork(watchUnBookingLaunchType),
];

export default launchSagas;

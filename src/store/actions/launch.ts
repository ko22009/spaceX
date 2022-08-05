import Launch from "../types/launch";

export const getPastLaunchesType = "getPastLaunches";
export const getFutureLaunchesType = "getFutureLaunchesType";
export const getDetailType = "getDetailType";
export const bookingLaunchType = "bookingLaunchType";
export const unBookingLaunchType = "unBookingLaunchType";

export const getPastLaunches = () => ({
  type: getPastLaunchesType,
});

export const getFutureLaunches = () => ({
  type: getFutureLaunchesType,
});

export const getDetail = (id: string) => ({
  type: getDetailType,
  id,
});

export const bookingLaunch = (launch: Launch) => ({
  type: bookingLaunchType,
  launch,
});

export const unBookingLaunch = (launch: Launch) => ({
  type: unBookingLaunchType,
  launch,
});

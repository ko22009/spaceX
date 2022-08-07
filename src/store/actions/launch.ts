import Launch from "../types/launch";

export const getPastLaunchesType = "getPastLaunches";
export const getFutureLaunchesType = "getFutureLaunchesType";
export const getDetailType = "getDetailType";
export const bookingLaunchType = "bookingLaunchType";
export const unBookingLaunchType = "unBookingLaunchType";

export const fetchPastLaunches = () => ({
  type: getPastLaunchesType,
});

export const fetchFutureLaunches = () => ({
  type: getFutureLaunchesType,
});

export const fetchDetail = (id: string) => ({
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

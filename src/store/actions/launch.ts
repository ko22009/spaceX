export const getPastLaunchesType = "getPastLaunches";
export const getFutureLaunchesType = "getFutureLaunchesType";

export const fetchPastLaunches = () => ({
  type: getPastLaunchesType,
});

export const fetchFutureLaunches = () => ({
  type: getFutureLaunchesType,
});

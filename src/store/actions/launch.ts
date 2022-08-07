export const getPastLaunchesType = "getPastLaunches";
export const getFutureLaunchesType = "getFutureLaunchesType";
export const getDetailType = "getDetailType";

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

export function getPastLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/past");
}

export function getFutureLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/upcoming");
}

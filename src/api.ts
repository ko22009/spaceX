import Launch from "./store/types/launch";

export function getPastLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/past");
}

export function getFutureLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/upcoming");
}

export function getLaunch(id: string) {
  return fetch(`https://api.spacexdata.com/v5/launches/${id}`);
}

export function bookLaunch(launch: Launch) {
  return new Promise((res) => res(launch));
}

export function unBookLaunch(launch: Launch) {
  return new Promise((res) => res(launch));
}

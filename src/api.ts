export function getPastLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/past");
}

export function getUpcomingLaunches() {
  return fetch("https://api.spacexdata.com/v5/launches/upcoming");
}

export function getLaunch(id: string) {
  return fetch(`https://api.spacexdata.com/v5/launches/${id}`);
}

export function bookLaunch() {
  return Promise.resolve();
}

export function cancelLaunch() {
  return Promise.resolve();
}

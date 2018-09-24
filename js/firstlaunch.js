let firstLaunch;

function checkForFirstLaunch() {
  if (localStorage.getItem("firstLaunch") === null) {
    firstLaunch = true;
    localStorage.setItem("firstLaunch", firstLaunch);
  } else {
    firstLaunch = false;
  }
}

// import start
import Weather from "./assets/js/weather";

const importAll = (r) => r.keys().map(r);
importAll(require.context("./assets/js/", true, /\.js$/));
importAll(require.context("./assets/css/", true, /\.css$/));

// import end

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const inputToggle = document.getElementById("unit-check");

  searchBtn.addEventListener("click", () => {
    const city = document.querySelector("input").value;
    const unit = Weather.getUnit();
    Weather.resetData();
    Weather.renderLoader(true);
    Weather.getCityData(city, unit);
  });

  inputToggle.addEventListener("click", () => {
    const city = document.querySelector("input").value;
    const unit = Weather.getUnit();
    if (city.length > 0) {
      Weather.resetData();
      Weather.renderLoader(true);
      Weather.getCityData(city, unit);
    }
  });
});

// import start
import Weather from "./assets/js/weather";
import "./assets/css/styles.min.css";

const importAll = (r) => r.keys().map(r);
importAll(require.context("./assets/js/", true, /\.js$/));

// import end

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const city = document.querySelector("input").value;
  Weather.hideData();
  Weather.renderLoader(true);
  Weather.getCityData(city);
});

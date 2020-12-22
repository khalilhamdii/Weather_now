// import start
import Weather from "./assets/js/weather";
import bgImg from "./assets/img/background.jpg";
const importAll = (r) => r.keys().map(r);
importAll(require.context("./assets/js/", true, /\.js$/));
importAll(require.context("./assets/css/", true, /\.css$/));

// import end

const bodyBg = (img) => {
  document.body.style.background = `linear-gradient(
    90deg,
    rgba(58, 65, 250, 0.5),
    rgba(255, 255, 255, 0.5)
  ), url(${img}) top no-repeat`;
};

document.addEventListener("DOMContentLoaded", () => {
  bodyBg(bgImg);
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

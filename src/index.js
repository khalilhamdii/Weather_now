// import start
import Weather from "./assets/js/weather";
import ImageSearch from "./assets/js/image_search";
import bgImg from "./assets/img/background.jpg";

const importAll = (r) => r.keys().map(r);
importAll(require.context("./assets/js/", true, /\.js$/));
importAll(require.context("./assets/css/", true, /\.css$/));

// import end
document.addEventListener("DOMContentLoaded", () => {
  ImageSearch.bodyBg(bgImg);
  const searchBtn = document.getElementById("search-btn");
  const inputToggle = document.getElementById("unit-check");

  searchBtn.addEventListener("click", () => {
    const city = document.querySelector("input").value;
    const unit = Weather.getUnit();
    const link = ImageSearch.imgLink(city);
    Weather.resetData();
    Weather.renderLoader(true);
    Weather.getCityData(city, unit);
    if (link) {
      link.then((link) => {
        ImageSearch.bodyBg(link);
      });
    }
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

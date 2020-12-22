// import start
import Weather from './assets/js/weather';

const importAll = (r) => r.keys().map(r);
importAll(require.context('./assets/js/', true, /\.js$/));
importAll(require.context('./assets/css/', true, /\.css$/));

// import end

const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', () => {
  const city = document.querySelector('input').value;
  const unit = Weather.getUnit();
  Weather.resetData();
  Weather.renderLoader(true);
  Weather.getCityData(city, unit);
});

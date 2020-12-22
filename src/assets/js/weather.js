const Weather = (() => {
  const fetchData = (city, unit) => fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=91001467aeb7419891af974f808d8f93`,
    {
      mode: 'cors',
    },
  ).then((response) => response.json());

  const renderLoader = (status) => {
    const loader = document.getElementById('loader-icon');
    if (status) {
      loader.classList.add('loader');
    } else {
      loader.classList.remove('loader');
    }
  };

  const getUnit = () => {
    const unit = document.getElementById('unit-check');
    if (unit.checked) {
      return 'metric';
    }
    return 'imperial';
  };

  const tempUnit = () => {
    const unit = document.getElementById('unit-check');
    if (unit.checked) {
      return '<sup>&deg;C</sup>';
    }
    return '<sup>&deg;F</sup>';
  };

  const windUnit = () => {
    const unit = document.getElementById('unit-check');
    if (unit.checked) {
      return ' kmh &middot;';
    }
    return ' mph &middot;';
  };

  const resetData = () => {
    const result = document.querySelector('.result');
    const cityName = document.querySelector('.card-title');
    const cityTemp = document.querySelector('.temp');
    const weatherDesc = document.querySelector('.description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    cityName.innerHTML = '';
    cityTemp.innerHTML = '';
    weatherDesc.innerHTML = '';
    wind.innerHTML = '';
    humidity.innerHTML = '';
    result.style.display = 'none';
  };
  const renderData = (
    tempValue,
    nameValue,
    descValue,
    windValue,
    humidityValue,
  ) => {
    const result = document.querySelector('.result');
    const cityName = document.querySelector('.card-title');
    const cityTemp = document.querySelector('.temp');
    const weatherDesc = document.querySelector('.description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');

    cityName.innerHTML = nameValue;
    cityTemp.innerHTML = `${tempValue}${tempUnit()}`;
    weatherDesc.innerHTML = descValue;
    wind.innerHTML = `Wind: ${windValue}${windUnit()}`;
    humidity.innerHTML = `Humidity: ${humidityValue}%`;
    result.style.display = 'inline-block';
  };

  const renderError = () => {
    resetData();
    const result = document.querySelector('.result');
    const cityName = document.querySelector('.card-title');
    cityName.innerHTML = 'City name is wrong!';
    result.style.display = 'inline-block';
    renderLoader(false);
  };
  const getCityData = (city, unit) => {
    fetchData(city, unit)
      .then((json) => {
        const tempValue = json.main.temp;
        const nameValue = json.name;
        const descValue = json.weather[0].description;
        const windValue = json.wind.speed;
        const humidityValue = json.main.humidity;
        renderLoader(false);
        renderData(tempValue, nameValue, descValue, windValue, humidityValue);
      })
      .catch(() => renderError());
  };

  return {
    getCityData,
    renderLoader,
    resetData,
    getUnit,
  };
})();

export default Weather;

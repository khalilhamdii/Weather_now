const Weather = (() => {
  const renderData = (
    tempValue,
    nameValue,
    descValue,
    windValue,
    humidityValue
  ) => {
    const result = document.querySelector(".result");
    const searchInput = document.querySelector("input");
    const cityName = document.querySelector(".card-title");
    const cityTemp = document.querySelector(".temp");
    const weatherDesc = document.querySelector(".description");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");

    cityName.innerHTML = nameValue;
    cityTemp.innerHTML = `${tempValue}&deg;`;
    weatherDesc.innerHTML = descValue;
    wind.innerHTML = `&middot; Wind: ${windValue} kmh &middot;`;
    humidity.innerHTML = `Humidity: ${humidityValue}%`;
    searchInput.value = "";
    result.style.display = "inline-block";
  };

  const renderError = () => {
    const result = document.querySelector(".result");
    const cityName = document.querySelector(".card-title");
    const cityTemp = document.querySelector(".temp");
    const weatherDesc = document.querySelector(".description");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    cityTemp.innerHTML = ``;
    weatherDesc.innerHTML = ``;
    wind.innerHTML = ``;
    humidity.innerHTML = ``;
    cityName.innerHTML = "City name is wrong!";
    result.style.display = "inline-block";
  };
  const getCityData = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91001467aeb7419891af974f808d8f93`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        let tempValue = json["main"]["temp"];
        let nameValue = json["name"];
        let descValue = json["weather"][0]["description"];
        let windValue = json["wind"]["speed"];
        let humidityValue = json["main"]["humidity"];

        renderData(tempValue, nameValue, descValue, windValue, humidityValue);
      })
      .catch(() => {
        renderError();
      });
  };

  return { getCityData };
})();

export default Weather;
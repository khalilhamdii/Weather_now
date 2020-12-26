/* eslint-disable consistent-return */
const ImageSearch = (() => {
  const fetchImage = (city) =>
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query="${city} landscape"&orientation=landscape&per_page=1&client_id=_Icg2UQ8IkX1mbHiRXvGgX5by5rfy13ncjpH--5-DX8`
    ).then((response) => response.json());

  const imgLink = (city) => {
    if (city.length > 0) {
      return fetchImage(city).then((json) => json.results[0].urls.regular);
    }
  };

  const bodyBg = (img) => {
    document.body.style.background = `linear-gradient(
      90deg,
      rgba(58, 65, 250, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${img}) no-repeat`;

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  };

  return { imgLink, bodyBg, fetchImage };
})();

export default ImageSearch;

/* eslint-disable consistent-return */
const ImageSearch = (() => {
  const fetchImage = (city) => fetch(
    `http://api.serpstack.com/search?access_key=36075f4c717caf4f68494580b493ca42&query="${city} tourism"&type=images&images_size=medium`,
  ).then((response) => response.json());

  const imgLink = (city) => {
    if (city.length > 0) {
      return fetchImage(city).then((json) => json.image_results[0].image_url);
    }
  };

  const bodyBg = (img) => {
    document.body.style.background = `linear-gradient(
      90deg,
      rgba(58, 65, 250, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url(${img}) top no-repeat`;

    document.body.style.backgroundSize = 'auto';
  };

  return { imgLink, bodyBg };
})();

export default ImageSearch;

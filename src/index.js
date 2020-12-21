// import start

import "./assets/css/styles.min.css";

const importAll = (r) => r.keys().map(r);
importAll(require.context("./assets/js/", true, /\.js$/));

// import end

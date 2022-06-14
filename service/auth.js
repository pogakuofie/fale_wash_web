const axios = require("axios").default;

const serverLogin = () => {
  axios
    .get("http://localhost:3000/api/login")
    .then(function (response) {})
    .catch(function (error) {})
    .then(function () {});
};

export { serverLogin };

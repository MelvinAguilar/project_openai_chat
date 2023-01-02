import axios from "axios";

const Services = {};

Services.fetchResponse = async (message) => {
  return axios
    .post(
      ``,
      { prompt: message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.message;
    });
};

export default Services;

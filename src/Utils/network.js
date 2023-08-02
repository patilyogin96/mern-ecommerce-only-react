import axios from "axios";

export var base_url = "http://localhost:8000/";
let access_token = "";

if (localStorage.hasOwnProperty("ecomm_token")) {
  access_token = localStorage.getItem("ecomm_token") || "";
}

var _headers =
  access_token === null || access_token === undefined || access_token === ""
    ? { "Content-Type": "application/json" }
    : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      };

export var api_open = axios.create({
  baseURL: base_url,
  timeout: 30000000,
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data);
    },
  ],
});

export var api_token = axios.create({
  baseURL: base_url,
  timeout: 30000000,
  headers: _headers,
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data);
    },
  ],
});

export const setToken = async (token) => {
  try {
    api_token = axios.create({
      baseURL: base_url,
      timeout: 300000000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept:
          "application/json;version=2, text/plain, */*, application/json, text/plain, */*",
      },
      transformRequest: [
        function (data, headers) {
          return JSON.stringify(data);
        },
      ],
    });
  } catch (error) {}
};

const DEV = {
  BASE_URL: "http://localhost:5000",
};

const MAP = {
  development: DEV
};

const Config = MAP[process.env.NODE_ENV];

export default Config;

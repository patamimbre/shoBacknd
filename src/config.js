require('dotenv').config();

const { env } = process;

const config = {
  PORT: env.PORT || 3000,
};

export default config;

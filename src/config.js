require('dotenv').config();

const { env } = process;

const config = {
  PORT: env.PORT || 3000,
  MONGO_URL: env.MONGO_URL || 'localhost',
  MONGO_PORT: env.MONGO_PORT || 27017,
  MONGO_DB: env.MONGO_DB || 'shop',
};

export default config;

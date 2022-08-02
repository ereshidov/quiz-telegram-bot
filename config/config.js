require("dotenv").config();

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  CHANNEL_ID: process.env.CHANNEL_ID
};

module.exports.config = config;

const { Telegraf } = require("telegraf");
const schedule = require('node-schedule');

const { generateAndSendQuiz } = require('./bot/generateAndSendQuiz')
const { config } = require("./config/config");

const bot = new Telegraf(config.BOT_TOKEN);

schedule.scheduleJob('30 * * * * *', function() {
  generateAndSendQuiz(bot)
})


// bot.launch();

module.exports.handler = async function (event, context) {
  const message = JSON.parse(event.body);
  await bot.handleUpdate(message);
  return {
      statusCode: 200,
      body: '',
  };
};

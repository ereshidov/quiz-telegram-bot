const { Telegraf } = require("telegraf");

const { config } = require("./config/config");

const bot = new Telegraf(config.BOT_TOKEN);

bot.hears("test", (ctx) => {
  ctx.reply("Hey there");
});

bot.launch();

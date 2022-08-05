const { getRandomQuestion } = require("../api/getRandomQuestion");
const { formatQuestion } = require("../helpers/formatQuestion");
const { config } = require("../config/config");

const generateAndSendQuiz = async (bot) => {
  try {
    const [question] = await getRandomQuestion();

    const formattedQuestion = formatQuestion(question);

    bot.telegram.sendQuiz(
      config.CHANNEL_ID,
      formattedQuestion.question,
      formattedQuestion.options,
      {
        is_anonymous: false,
        correct_option_id: formattedQuestion.correctOptionId,
      }
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  generateAndSendQuiz
}

const { shuffleArray } = require("./shuffle");

const CORRECT_ANSWER_ID = 80;

const formatQuestion = (data) => {
  const question = data.question;

  const options = prepareOptions(data.correctAnswer, data.incorrectAnswers);

  const shuffledOptions = shuffleArray(options);

  const correctOptionId = shuffledOptions.findIndex(
    (option) => option.id === CORRECT_ANSWER_ID
  );

  return {
    question,
    options: shuffledOptions.map((v) => v.option),
    correctOptionId,
  };
};

const prepareOptions = (correctAnswer, incorrectAnswers) => {
  const correctOption = {
    id: CORRECT_ANSWER_ID,
    option: correctAnswer,
  };

  const incorrectOptions = incorrectAnswers.map((incorrectAnswer, index) => {
    return {
      id: index,
      option: incorrectAnswer,
    };
  });
  return [correctOption, ...incorrectOptions];
};

module.exports = {
  formatQuestion
}

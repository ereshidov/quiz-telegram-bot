const fetch = require('node-fetch')

// [
//   {
//     "category": "Geography",
//     "id": "623386af62eaad73716a8ceb",
//     "correctAnswer": "The Bronx ",
//     "incorrectAnswers": [
//       "Brooklyn",
//       "Staten Island",
//       "The Jersey Shore"
//     ],
//     "question": "Which Borough of New York is northeast of and adjacent to Manhattan?",
//     "tags": [
//       "new_york",
//       "cities",
//       "usa",
//       "geography"
//     ],
//     "type": "Multiple Choice",
//     "difficulty": "hard",
//     "regions": []
//   }
// ]
const getRandomQuestion = async () => {
  try {
    const response = await fetch("https://the-trivia-api.com/api/questions?limit=1");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error: ", error.message);
  }
};

module.exports = {
  getRandomQuestion,
};

const { CreateQuestionDTO } = require("../dtos/question");
const { questionRepository } = require("../../data-access/repositories");

class QuestionService {
  createQuestionsForQuiz(context, questions) {
    const client = context.client;
    const quiz = context.quiz;

    const createdQuestions = [];

    questions.forEach(({ text, answer }) => {
      createdQuestions.push(
        questionRepository.createQuestion(
          client.id,
          quiz.id,
          new CreateQuestionDTO({ text, answer })
        )
      );
    });

    return createdQuestions;
  }
}

module.exports = new QuestionService();

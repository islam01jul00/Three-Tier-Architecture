const { QuizWithQuestionsDTO } = require("../dtos/quiz");
const questionService = require("./question-service");
const { quizRepository } = require("../../data-access/repositories");

class QuizService {
  createQuiz(context, { title, questions }) {
    const client = context.client;

    const createdQuiz = quizRepository.createQuiz(client.id, { title });

    const createdQuestions = questionService.createQuestionsForQuiz(
      context.ensureQuiz(createdQuiz.id),
      questions
    );

    return new QuizWithQuestionsDTO({
      quiz: createdQuiz,
      questions: createdQuestions,
    });
  }
}

module.exports = new QuizService();

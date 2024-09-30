const Context = require("./business-logic/utils/context");
const { CreateClientDTO } = require("./business-logic/dtos/client");
const { CreateQuizDTO } = require("./business-logic/dtos/quiz");
const { clientService, quizService } = require("./business-logic/services");

const main = () => {
  try {
    const client = clientService.createClient(
      new CreateClientDTO({ name: "Cleint 1" })
    );

    const quiz = quizService.createQuiz(
      new Context().ensureClient(client.id),
      new CreateQuizDTO({
        title: "",
        questions: [
          {
            text: "Question 1",
            answer: "Answer 1",
          },
        ],
      })
    );

    console.log(quiz.toJSON());
  } catch (e) {
    console.error(e);
  }
};

main();

const { ValidationError } = require("../../errors/common");

const validateQuestions = (value) => {
  if (!Array.isArray(value)) {
    throw new ValidationError("Invalid questions, it must be an array.");
  }
};

module.exports = validateQuestions;

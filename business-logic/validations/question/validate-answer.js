const validator = require("validator");
const { ValidationError } = require("../../errors/common");

const validateAnswer = (value) => {
  if (typeof value !== "string") {
    throw new ValidationError("Invalid answer, it must be a string.");
  }

  if (!validator.isLength(value, { min: 1, max: 256 })) {
    throw new ValidationError(
      "Invalid answer, it must be between 1 and 256 characters."
    );
  }
};

module.exports = validateAnswer;

const validator = require("validator");
const { ValidationError } = require("../../errors/common");

const validateText = (value) => {
  if (typeof value !== "string") {
    throw new ValidationError("Invalid text, it must be a string.");
  }

  if (!validator.isLength(value, { min: 1, max: 256 })) {
    throw new ValidationError(
      "Invalid text, it must be between 1 and 512 characters."
    );
  }
};

module.exports = validateText;

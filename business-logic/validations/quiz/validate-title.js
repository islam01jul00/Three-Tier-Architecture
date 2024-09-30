const validator = require("validator");
const { ValidationError } = require("../../errors/common");

const validateTitle = (value) => {
  if (typeof value !== "string") {
    throw new ValidationError("Invalid title, it must be a string.");
  }

  if (!validator.isLength(value, { min: 1, max: 256 })) {
    throw new ValidationError(
      "Invalid title, it must be between 1 and 256 characters."
    );
  }
};

module.exports = validateTitle;

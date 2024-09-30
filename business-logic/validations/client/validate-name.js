const validator = require("validator");
const { ValidationError } = require("../../errors/common");

const validateName = (value) => {
  if (typeof value !== "string") {
    throw new ValidationError("Invalid name, it must be a string.");
  }

  if (!validator.isLength(value, { min: 1, max: 32 })) {
    throw new ValidationError(
      "Invalid name, it must be between 1 and 32 characters."
    );
  }
};

module.exports = validateName;

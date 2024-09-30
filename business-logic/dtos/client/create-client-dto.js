const { validateName } = require("../../validations/client");

class CreateClientDTO {
  #name;

  constructor({ name }) {
    validateName(name);

    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}

module.exports = CreateClientDTO;

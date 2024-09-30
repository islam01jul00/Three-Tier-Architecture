class ClientDTO {
  #id;
  #name;

  constructor({ id, name }) {
    this.#id = id;
    this.#name = name;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}

module.exports = ClientDTO;

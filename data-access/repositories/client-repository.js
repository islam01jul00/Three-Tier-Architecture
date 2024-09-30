const { v4: uuid } = require("uuid");
const { ClientDTO } = require("../../business-logic/dtos/client");

const clients = [];

class ClientRepository {
  createClient({ name }) {
    const client = { id: uuid(), name };

    clients.push(client);

    return new ClientDTO(client);
  }

  retrieveClient(clientId) {
    return new ClientDTO(clients.find((client) => client.id === clientId));
  }
}

module.exports = new ClientRepository();

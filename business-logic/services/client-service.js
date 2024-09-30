const { clientRepository } = require("../../data-access/repositories");

class ClientService {
  createClient({ name }) {
    return clientRepository.createClient({ name });
  }
}

module.exports = new ClientService();

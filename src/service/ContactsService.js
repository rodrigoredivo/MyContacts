import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/d3d06b91-c09d-4c13-a9ef-4337a0140f97?orderBy=${orderBy}`);
  }

  async CreateContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactsService();

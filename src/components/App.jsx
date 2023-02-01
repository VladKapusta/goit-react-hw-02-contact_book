import React, { Component } from 'react';
import { Form } from './addContactForm/addContactForm';
import { Filter } from './filterContacts/filterContact';
import { ContactsList } from './contactsList/contactsList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    const aa = this.state.contacts.some(el => el.name === data.name);
    if (aa) {
      alert(`Контакт з Ім'ям ${data.name} вже існує`);
      return;
    }
    this.setState(prevState => ({ contacts: [data, ...prevState.contacts] }));
  };
  setFilterValue = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterLowerCase = filter.toLowerCase();
    const cont = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterLowerCase)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <Filter filter={filter} onFilterValue={this.setFilterValue} />
        <h2>Contacts</h2>
        <ContactsList contacts={cont} onClickDelete={this.deleteContact} />
      </>
    );
  }
}

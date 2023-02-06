import React, { Component } from 'react';
import { ReactComponent as IconAdd } from './Icons/add.svg';
import { ReactComponent as IconClose } from './Icons/close.svg';

import { Clock } from './Clock/Clock';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './FilterContacts/FilterContacts';
import { FormAddContact } from './FormaAddContact/FormAddContact';
import { Modal } from './Modal/modal';
import { Titel, SubTitel, OpenModal, CloseModal } from './app.staled';



const KEY_LS = 'contacts';
export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem(KEY_LS);
    const parseContacts = JSON.parse(contactsLocalStorage);
    this.setState({ contacts: parseContacts });
  }

  componentDidUpdate() {
    localStorage.setItem(KEY_LS, JSON.stringify(this.state.contacts));
  }

  addContact = data => {
    const existsContact = this.state.contacts.some(
      ({ name }) => name === data.name
    );
    if (existsContact) {
      alert(`Контакт з Ім'ям ${data.name} вже існує`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [data, ...prevState.contacts] };
    });
  };

  filterListContacts = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = btnId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== btnId),
      };
    });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { contacts, filter, showModal } = this.state;
    const FilterLowerCase = filter.toLowerCase();
    const contactsFilter = contacts.filter(({ name }) =>
      name.toLowerCase().includes(FilterLowerCase)
    );

    return (
      <>
        <Titel>PhoneBook</Titel>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <FormAddContact
              addContact={this.addContact}
              closeModal={this.toggleModal}
            />
            <CloseModal onClick={this.toggleModal}><IconClose width="24" height="24"/></CloseModal>
            <Clock />
          </Modal>
        )}
        <OpenModal onClick={this.toggleModal}>
          <IconAdd width="32" height="32" />
        </OpenModal>

        <SubTitel>Contacts</SubTitel>

        {this.state.contacts.length > 0 ? (
          <>
            <Filter
              filter={this.state.filter}
              onChangeFilter={this.filterListContacts}
            />
            <ContactsList
              contacts={contactsFilter}
              deleteContact={this.deleteContact}
            />
          </>
        ) : (
          'Contact list is empty.'
        )}
      </>
    );
  }
}

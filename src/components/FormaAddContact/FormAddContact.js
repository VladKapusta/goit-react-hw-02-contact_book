import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormContact,
  Label,
  LabelText,
  Input,
  ButtonSubmit,
} from './addContactForm.staled';

export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  saveInputValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = e => {
    const { name, number } = this.state;
    e.preventDefault();
    const contact = {
      id: nanoid(5),
      name,
      number,
    };
    this.props.addContact(contact);
    this.clearFormInput();
    this.props.closeModal();
  };

  clearFormInput = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContact onSubmit={this.onSubmitForm}>
        <Label>
          <LabelText>Name</LabelText>
          <Input
            autoFocus
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.saveInputValue}
          />
        </Label>
        <Label>
          <LabelText>Number</LabelText>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.saveInputValue}
          />
        </Label>
        <ButtonSubmit type="submit">Add Contact</ButtonSubmit>
      </FormContact>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormContact,
  Label,
  Input,
  LabelText,
  ButtonSubmit,
} from './addContactForm.staled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(4),
    };

    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContact action="" onSubmit={this.formSubmit}>
        <Label>
          <LabelText>Name:</LabelText>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          <LabelText>Number:</LabelText>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormContact>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

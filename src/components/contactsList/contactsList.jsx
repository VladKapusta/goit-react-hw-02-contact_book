import PropTypes from 'prop-types';
import { ContactItem } from './contactItem/contactItem';
import { ContactsBox, ListContacts, ItemContact } from './contactsList.styled';

export const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <ContactsBox>
      <ListContacts>
        {contacts.map(({ id, name, number }) => {
          return (
            <ItemContact key={id}>
              <ContactItem
                name={name}
                number={number}
                id={id}
                onClickDelete={onClickDelete}
              />
            </ItemContact>
          );
        })}
      </ListContacts>
    </ContactsBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

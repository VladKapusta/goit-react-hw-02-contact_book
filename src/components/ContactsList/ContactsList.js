import { ContactItem } from './ContactItem/ContactItem';
import { ContactsBox, ListContacts, ItemContact } from './contactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ContactsBox>
      <ListContacts>
        {contacts.map(({ id, name, number }) => (
          <ItemContact key={id}>
            <ContactItem
              name={name}
              number={number}
              id={id}
              deleteContact={deleteContact}
            />
          </ItemContact>
        ))}
      </ListContacts>
    </ContactsBox>
  );
};

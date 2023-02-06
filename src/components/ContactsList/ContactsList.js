import { ContactItem } from './ContactItem/ContactItem';
// import { ContactsBox, ListContacts, Contact } from './contactsList.styled';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <div>
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  </div>
    // <ContactsBox>
    //   <ListContacts>
    //     {contacts.map(({ id, name, number }) => (
    //       <Contact key={id}>
    //         <ContactItem
    //           name={name}
    //           number={number}
    //           id={id}
    //           deleteContact={deleteContact}
    //         />
    //       </Contact>
    //     ))}
    //   </ListContacts>
    // </ContactsBox>
  );
};

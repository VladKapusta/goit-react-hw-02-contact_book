import PropTypes from 'prop-types';
import { ContactItem } from './contactItem/contactItem';

export const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactItem
                name={name}
                number={number}
                id={id}
                onClickDelete={onClickDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { TextContent, DeleteBtn } from './contactItem.styled';

export const ContactItem = ({ name, number, id, onClickDelete }) => {
  return (
    <>
      <TextContent>{name}:</TextContent>
      <TextContent> {number}</TextContent>
      <DeleteBtn type="button" onClick={() => onClickDelete(id)}>
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

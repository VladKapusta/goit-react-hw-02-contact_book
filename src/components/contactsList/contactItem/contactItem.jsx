import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onClickDelete }) => {
  return (
    <>
      <span>{name}:</span>
      <span> {number}</span>
      <button type="button" onClick={() => onClickDelete(id)}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

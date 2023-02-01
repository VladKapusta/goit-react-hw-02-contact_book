import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterValue }) => {
  return (
    <input 
     type="text"
     name="filter" 
     value={filter} 
     onChange={onFilterValue} 
     />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterValue: PropTypes.func.isRequired,
}

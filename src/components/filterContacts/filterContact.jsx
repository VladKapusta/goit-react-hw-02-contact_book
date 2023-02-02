import PropTypes from 'prop-types';
import { FilterInput } from './filterContacts.styled';


export const Filter = ({ filter, onFilterValue }) => {
  return (
    <FilterInput 
     type="text"
     name="filter" 
     value={filter} 
     onChange={onFilterValue} 
     placeholder =" Search contact"
     />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterValue: PropTypes.func.isRequired,
}

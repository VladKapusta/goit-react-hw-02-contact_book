import { FilterInput } from "./filterContacts.staled";


export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
    <p>Find a contact by name</p>
    <FilterInput
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      placeholder="Search contact"
      value={filter}
      onChange={onChangeFilter}
    />
    </>
  );
};

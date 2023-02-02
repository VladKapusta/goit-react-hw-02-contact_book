import styled from '@emotion/styled';

export const ContactsBox = styled.div`
  margin-top: 30px;
  padding: 0 20px;
`;
export const ListContacts = styled.ul`
  > :not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const ItemContact = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  >:first-child {
    width: 250px;
  }
`;

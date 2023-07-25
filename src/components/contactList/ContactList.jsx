import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

import {
  ContactListUl,
  ContactItem,
  ContactDeleteButton,
} from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filters.filter).toLowerCase();
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };

  const filteredContacts = useMemo(() => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }, [contacts, filterValue]);

  return (
    <ContactListUl>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactDeleteButton
            type="button"
            onClick={handleDelete}
            id={contact.id}
          >
            Delete
          </ContactDeleteButton>
        </ContactItem>
      ))}
    </ContactListUl>
  );
};

export default ContactList;

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact } from 'redux/operation';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

import { fetchContacts } from 'redux/operation';

import {
  ContactListUl,
  ContactItem,
  ContactDeleteButton,
} from './ContactList.styled';

import Loader from 'components/loader';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactListUl>
      {isLoading && !error ? (
        <Loader />
      ) : contacts.length === 0 && !error ? (
        <p>First contact</p>
      ) : (
        contacts.map(contact => (
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
        ))
      )}
    </ContactListUl>
  );
};

export default ContactList;

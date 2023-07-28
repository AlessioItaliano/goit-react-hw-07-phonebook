import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operation';
import Loader from 'components/loader';

import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';

import {
  ContactListUl,
  ContactItem,
  ContactDeleteButton,
} from './ContactList.styled';

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
        <p>Your contact book is empty</p>
      ) : (
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.phone}
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

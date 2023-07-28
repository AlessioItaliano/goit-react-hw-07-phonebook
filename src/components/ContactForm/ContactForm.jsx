import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectContacts } from 'redux/selectors';

import {
  AddContactForm,
  AddContactFormLabel,
  AddContactFormInput,
  AddContactFormBtn,
} from './ContactForm.styled';

const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(({ name }) => name.toLowerCase() === userName.toLowerCase())
    ) {
      return alert(`${userName} is already in contacts`);
    }

    dispatch(addContact({ name: userName, phone: userNumber }));
    setUserName('');
    setUserNumber('');
  };

  return (
    <AddContactForm onSubmit={onSubmit}>
      <AddContactFormLabel>Name</AddContactFormLabel>
      <AddContactFormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <AddContactFormLabel>Number</AddContactFormLabel>
      <AddContactFormInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={userNumber}
        onChange={e => setUserNumber(e.target.value)}
      />
      <AddContactFormBtn type="submit">Add contact</AddContactFormBtn>
    </AddContactForm>
  );
};

export default AddContact;

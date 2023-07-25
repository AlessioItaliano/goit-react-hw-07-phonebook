import AddContact from 'components/ContactForm';
import ContactList from 'components/contactList';
import ContactsFilter from './contactsFilter/ContactsFilter';

import { Title } from './App.styled';

const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <AddContact />
      <Title>Contacts</Title>
      <ContactsFilter />
      <ContactList />
    </>
  );
};

export default App;

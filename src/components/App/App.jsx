import { Form } from '../Form/Form';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from '../Filter/Filter';

import css from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // ========Adding contacts=========
  const onAddingContacts = newContact => {
    contacts.find(prev => prev.name === newContact.name)
      ? toast.warning(`${newContact.name} is already in contacts `)
      : dispatch(addContact(newContact));
  };

  // =========Render=========

  return (
    <div className={css.form__wrapper}>
      <h2 className={css.form__title}>Phonebook</h2>
      <Form onAddingContacts={onAddingContacts} />
      <h2 className={css.form__title}>Contacts</h2>
      <Filter />
      <Contacts />
      <ToastContainer autoClose={1000} />
    </div>
  );
};

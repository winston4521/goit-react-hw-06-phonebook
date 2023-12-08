import css from './Contacts.module.css';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  console.log(contacts);
  // ===================Filter=========================

  const filteredContacts = useMemo(
    () =>
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contacts, filter]
  );

  return (
    <ul className={css.delete__list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.delete__item} key={id}>
          <span className={css.delete__userName}>
            {name} : {number}
          </span>

          <>
            <button
              className={css.delete__btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            ></button>
          </>
        </li>
      ))}
    </ul>
  );
};

import React from 'react';

import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filter);
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

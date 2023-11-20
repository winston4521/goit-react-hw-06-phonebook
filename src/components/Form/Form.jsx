import { useState } from 'react';
import shortid from 'shortid';

import css from './Form.module.css';

export const Form = ({ onAddingContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handlEValues = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitBtn = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    onAddingContacts(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onSubmitBtn}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          placeholder="Name"
          type="text"
          name="name"
          required
          value={name}
          onChange={handlEValues}
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          placeholder="Phone number"
          type="tel"
          name="number"
          required
          value={number}
          onChange={handlEValues}
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

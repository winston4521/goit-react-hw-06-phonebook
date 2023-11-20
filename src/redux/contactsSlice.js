import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(cont => cont.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

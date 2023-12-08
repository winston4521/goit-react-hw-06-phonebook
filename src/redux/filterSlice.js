const { createSlice } = require('@reduxjs/toolkit');

const initialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    fillFilter: (state, { payload }) => (state = payload),
  },
});
export const filterReducer = filterSlice.reducer;
export const { fillFilter } = filterSlice.actions;

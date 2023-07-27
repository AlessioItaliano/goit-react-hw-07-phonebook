import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterContacts(state, actions) {
      state.value = actions.payload;
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;

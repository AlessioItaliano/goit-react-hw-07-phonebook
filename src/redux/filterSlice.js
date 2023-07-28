import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterContacts(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilterContacts } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

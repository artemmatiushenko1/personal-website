import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';

export const sendEmail = createAsyncThunk(
  'contact/sendEmail',
  async (emailTeamplate, thunkAPI) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        emailTeamplate,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
      );
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  isLoading: false,
  error: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: {
    [sendEmail.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [sendEmail.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [sendEmail.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const contactReducer = contactSlice.reducer;

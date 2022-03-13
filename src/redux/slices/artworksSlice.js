import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from '@firebase/firestore';
import { db } from '../../firebase/config';

export const getArtworks = createAsyncThunk(
  'artworks/getArtworks',
  async (_, thunkApi) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'artworks'));
      const artworks = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      console.log(artworks);
      return thunkApi.fulfillWithValue(artworks);
    } catch (err) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  artworks: [],
  isLoading: false,
  error: null,
};

export const artworksSlice = createSlice({
  name: 'artworks',
  initialState,
  extraReducers: {
    [getArtworks.pending]: (state, { payload }) => {
      state.error = null;
      state.isLoading = true;
    },
    [getArtworks.fulfilled]: (state, { payload }) => {
      state.artworks = payload;
      state.isLoading = false;
    },
    [getArtworks.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const artworksReducer = artworksSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from '@firebase/firestore';
import { db } from '../../firebase/config';

const sortArtworks = (artworks) => {
  return [...artworks].sort((a, b) => {
    return Date.parse(b.createdAt) - Date.parse(a.createdAt);
  });
};

export const getArtworks = createAsyncThunk(
  'artworks/getArtworks',
  async (_, thunkApi) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'artworks'));
      const artworks = querySnapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
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
    [getArtworks.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [getArtworks.fulfilled]: (state, { payload }) => {
      state.artworks = sortArtworks(payload);
      state.isLoading = false;
    },
    [getArtworks.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const artworksReducer = artworksSlice.reducer;

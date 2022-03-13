import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from '@firebase/firestore';
import { db, storage } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

export const postArtwork = createAsyncThunk(
  'artworks/postArtwork',
  async ({ name, categories, file, year }, thunkApi) => {
    try {
      const storageRef = ref(storage, `artworks/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      const newArtwork = {
        imgUrl: downloadURL,
        createdAt: new Date().toISOString(),
        name,
        year,
        categories,
      };

      await addDoc(collection(db, 'artworks'), newArtwork);
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
    [postArtwork.pending]: (state, { payload }) => {
      state.error = null;
      state.isLoading = true;
    },
    [postArtwork.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [postArtwork.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const artworksReducer = artworksSlice.reducer;

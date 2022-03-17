import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection } from '@firebase/firestore';
import { db } from '../../firebase/config';

export const getNfts = createAsyncThunk('nft/getNfts', async (_, thunkApi) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'nfts'));
    const nfts = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return thunkApi.fulfillWithValue(nfts);
  } catch (err) {
    return thunkApi.rejectWithValue({ message: err.message });
  }
});

const initialState = {
  nfts: [],
  isLoading: false,
  error: null,
};

export const nftSlice = createSlice({
  name: 'nfts',
  initialState,
  extraReducers: {
    [getNfts.pending]: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    [getNfts.fulfilled]: (state, { payload }) => {
      state.nfts = payload;
      state.isLoading = false;
    },
    [getNfts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const nftsReducer = nftSlice.reducer;

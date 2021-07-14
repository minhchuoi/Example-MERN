import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost, createPost, updatePost } from "../../api";

export const getData = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await fetchPost();
  return data;
});

export const createData = createAsyncThunk(
  "posts/createPosts",
  async (payload) => {
    console.log(payload);
    const { data } = await createPost(payload);
    return data;
  }
);

export const updateData = createAsyncThunk(
  "posts/updatePosts",
  async (payload) => {
    // console.log(payload);
    const { data } = await updatePost(payload);
    return data;
  }
);

const initialState = {
  data: [],
  status: null,
  modal: "modalFalse",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    showModal: (state, action) => {
      return {
        ...state,
        modal: "modalTrue",
      };
    },
    closeModal: (state, action) => {
      return {
        ...state,
        modal: "modalFalse",
      };
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = "loading";
    },
    [getData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
      state.status = "success";
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateData.pending]: (state, action) => {
      // console.log('loading');
      state.status = "loading";
    },
    [updateData.fulfilled]: (state, action) => {
      // console.log('sc');
      state.status = "success";
      // getData()
    },
    [updateData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default homeSlice.reducer;
export const { showModal, closeModal } = homeSlice.actions;

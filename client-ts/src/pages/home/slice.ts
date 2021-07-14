import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPost, createPost, updatePost } from "../../api";
import { TypeInitialState, TypeData } from "../../types";

export const getData: any = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await fetchPost();
  return data;
});

export const createData: any = createAsyncThunk(
  "posts/createPosts",
  async (payload: TypeData) => {
    console.log(payload);
    const { data } = await createPost(payload);
    return data;
  }
);

export const updateData: any = createAsyncThunk(
  "posts/updatePosts",
  async (payload: TypeData) => {
    // console.log(payload);
    const { data } = await updatePost(payload);
    return data;
  }
);

const initialState: TypeInitialState = {
  data: [],
  status: null,
  modal: "modalFalse",
};

const homeSlice: any = createSlice({
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
      state.data = action.payload;
      state.status = "success";
    },
    [getData.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateData.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateData.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateData.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default homeSlice.reducer;
export const { showModal, closeModal } = homeSlice.actions;

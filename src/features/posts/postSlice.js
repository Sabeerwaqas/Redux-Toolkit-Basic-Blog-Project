// Importing createSlice
import { createSlice } from "@reduxjs/toolkit";

// Make initial state

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heared good things",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;

// Importing  configureStore
import { configureStore } from "@reduxjs/toolkit";
// Importting postsReducer from postSlice.js
import postsReducer from "../features/posts/postSlice";

export const store = configureStore({
    reducer:{

        posts: postsReducer

    }
})
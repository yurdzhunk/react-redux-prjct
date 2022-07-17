import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import postsReducer from './posts'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer
  },
})
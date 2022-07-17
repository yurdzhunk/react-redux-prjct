import { createSlice} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: []
    },
    reducers: {
        addPost: (state, action) => {
            state.list.push(action.payload);
            console.log(state.list)
        }
    }
})

export const {addPost} = postsSlice.actions

export default postsSlice.reducer
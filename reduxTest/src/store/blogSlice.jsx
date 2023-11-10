import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  myList: [
    { id: 1, title: "Sample Blog Post 1" },
    { id: 2, title: "Sample Blog Post 2" },
    { id: 3, title: "Sample Blog Post 3" },
    { id: 4, title: "Sample Blog Post 4" },
    { id: 5, title: "Sample Blog Post 5" },
    { id: 6, title: "Sample Blog Post 6" },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    deleteBlog: (state, action) => {
      const id = action.payload;
      state.myList = state.myList.filter((blog) => blog.id !== id);
    },
  },
});
export const { deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;

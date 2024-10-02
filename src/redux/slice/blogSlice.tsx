



import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    blogs:{}

};


export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setImageDetails: (state, action) => {
      state.blogs = { ...state.blogs, ...action.payload }; 
    },
   
  },
});


export const { setImageDetails } = blogSlice.actions;
export default blogSlice.reducer;

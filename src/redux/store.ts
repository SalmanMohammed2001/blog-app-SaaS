import blogSliceReducer from "./slice/blogSlice";
import { configureStore } from "@reduxjs/toolkit";



export interface RootState {
    blogPageSliceInfo: ReturnType<typeof blogSliceReducer>;

  }
  
  
  const store = configureStore({
    reducer: {
        blogPageSliceInfo: blogSliceReducer,
   
    },
  });
  
  
  //export type AppDispatch = typeof store.dispatch; 
  export default store;
  
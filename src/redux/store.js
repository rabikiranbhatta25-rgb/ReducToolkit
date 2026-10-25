import { configureStore } from "@reduxjs/toolkit";
import searchSlice from './feature/searchSlice';
import collectionReducer from './feature/collectionSlice'
export const store= configureStore({
    reducer:{
        search:searchSlice,
        collection:collectionReducer
    }
})
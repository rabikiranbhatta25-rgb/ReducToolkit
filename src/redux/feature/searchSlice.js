import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
    query:'',
    activeTab:'',
    results:[],
    loading:false,
    error:null
},
reducers:{
setQuery(state,action){
 state.query= action.payload;
},
setAciveTabs(state, action){
state.activeTab= action.payload;
},
setResults(state,action){
state.results=action.payload;
state.loading=false;
},
setLoading(state,action){
state.loading= action.payload;
state.error=action.payload
},
setError(state,action){
state.error=action.payload
state.loading=action.payload
},}})
export const {setQuery,setAciveTabs,setResults,setLoading ,setError} = searchSlice.actions
export default searchSlice.reducer;
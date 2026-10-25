import { createSlice } from "@reduxjs/toolkit";
 import { Bounce, toast } from 'react-toastify';
 const initialState={
    items:JSON.parse(localStorage.getItem('collection'))||[]
 }
const collectionSlice= createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
 const alreadyExist=state.items.find(items=>items.id==action.payload.id)
 if(!alreadyExist){
    state.items.push(action.payload);
    localStorage.setItem('collection',JSON.stringify(state.items))
 }
        },
        removeCollection:(state,action)=>{
      state.items=state.items.filter(
        item=>item.id !=action.payload
      )
      localStorage.setItem('collection',JSON.stringify(state.items))
        },
        clearCollection:(state)=>{
state.items=[]
localStorage.removeItem('collection')
        },
        addedToast:()=>{
toast('✅Added Sucessfully', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});        },
removeToast:()=>{
   toast('❌ Remove SucessFully', {
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});

}
    }

})
export const  {
    addCollection,removeCollection,clearCollection,addedToast,removeToast
}=collectionSlice.actions
export default collectionSlice.reducer;
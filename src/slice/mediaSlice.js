import { createSlice } from "@reduxjs/toolkit";

const mediaSlice=createSlice({
    name:'media',
    initialState:{
        media:null
    },
    reducers:{
        setMedia:(state,action)=>{
        state.media=action.payload.media
        }
    }
})


export const {setMedia}= mediaSlice.actions

export const media=(state)=>state.name.media

export default mediaSlice.reducer

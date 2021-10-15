import { configureStore } from "@reduxjs/toolkit";
import mediaReducer  from '../slice/mediaSlice'

export default configureStore({
    reducer: {
        media: mediaReducer
    }
})
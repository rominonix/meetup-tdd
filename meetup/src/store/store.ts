import { configureStore } from "@reduxjs/toolkit";
import event from './slice/event.slice'


const store = configureStore({
    reducer: {
        event
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch


export default store
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getSearch } from "../../api";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  location?: { street: string; city: string };
  reviews: number[];
  digitalEvent: boolean;
  availableSeats: number;
  UserId: string;
  eventImg: string;
}

export const initialState: Event[] = [];

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addEvent } = eventSlice.actions;
export const getEventSelector = (state: RootState) => state.event;
export default eventSlice.reducer;

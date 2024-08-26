import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventList: [],
};

const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    reasignData: (state, action) => {
      state.eventList = action.payload;
    },
  },
});
export const { reasignData } = event.actions;
export default event.reducer;

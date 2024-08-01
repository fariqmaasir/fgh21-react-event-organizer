import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    assignProfile: (state, action) => {
      state.data = action.payload;
    },

    logoutProfile: (state) => {
      state.data = {};
    },
  },
});
export const { assignProfile, logoutProfile } = profile.actions;
export default profile.reducer;

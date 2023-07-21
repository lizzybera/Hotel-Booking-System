import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null || "",
};

const Authglobal = createSlice({
  name: "authState",
  initialState,
  reducers: {
    createUser: (state: any, { payload }: any) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { createUser, logOut } = Authglobal.actions;

export default Authglobal.reducer;

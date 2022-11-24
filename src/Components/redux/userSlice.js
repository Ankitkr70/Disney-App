import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    setUserLogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setUserLogout: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLogin, setUserLogout } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;

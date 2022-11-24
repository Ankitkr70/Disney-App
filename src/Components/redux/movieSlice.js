import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
  movies: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: INIT_STATE,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;
export default movieSlice.reducer;

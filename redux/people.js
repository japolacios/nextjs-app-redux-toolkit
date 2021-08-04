import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setInitialPeople: (state, action) => {
      state.people = action.payload;
    },
    positive: (state, action) => {
      state.people[action.payload].votes.positive += 1;
      localStorage.setItem("people", JSON.stringify(state.people));
    },
    negative: (state, action) => {
      state.people[action.payload].votes.negative += 1;
      localStorage.setItem("people", JSON.stringify(state.people));
    },
  },
});

export const { positive, negative, setInitialPeople } = peopleSlice.actions;

export default peopleSlice.reducer;

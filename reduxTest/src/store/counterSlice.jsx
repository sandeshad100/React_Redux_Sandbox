import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  myList: [10, 20, 30, 40, 50, 60],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    deleteArrayItem: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.myList.length) {
        state.myList.splice(index, 1); // Remove the item at the specified index
      }
    },
  },
});
console.log("Reducer: ", counterSlice.reducer);
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, deleteArrayItem } =
  counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existItemIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existItemIndex >= 0) {
        state.list[existItemIndex] = {
          ...state.list[existItemIndex],
          count: state.list[existItemIndex].count + 1,
        };
      } else {
        state.list.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;

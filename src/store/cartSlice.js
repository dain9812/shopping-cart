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
    removeItem: (state, action) => {
      const existItemIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );

      state.list[existItemIndex] = {
        ...state.list[existItemIndex],
        count: state.list[existItemIndex].count - 1,
      };
    },
    clearItem: (state, action) => {
      state.list = [
        ...state.list.filter((item) => item.id !== action.payload.id),
      ];
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;

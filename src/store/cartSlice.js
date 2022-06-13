import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  totalPrice: 0,
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
<<<<<<< HEAD
    calculateTotalPrice: (state) => {
      const initialPrice = 0;
      const price = state.list.reduce(
        (prev, cur) => prev + cur.price * cur.count,
        initialPrice
      );
      state.totalPrice = price;
    },
  },
});

export const { addItem, removeItem, clearItem, calculateTotalPrice } =
  cartSlice.actions;
=======
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
>>>>>>> refs/remotes/origin/main

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const getLocalItem = () => {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const initialPrice = 0;
  const price = localCart?.reduce(
    (prev, cur) => prev + cur.price * cur.count,
    initialPrice
  );
  return localCart !== null
    ? { data: localCart, price }
    : { data: [], price: initialPrice };
};

const initialState = {
  list: getLocalItem().data,
  totalPrice: getLocalItem().price,
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
    clearAllItem: (state) => {
      state.list = [];
    },
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

export const {
  addItem,
  removeItem,
  clearItem,
  clearAllItem,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;

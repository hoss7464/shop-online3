import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./features/cart/cartSlice";
import simpleFormReducer from "./features/simpleFormSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    simpleForm: simpleFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});

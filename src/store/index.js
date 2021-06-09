import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
  devTools: composeWithDevTools,
});

export default store;

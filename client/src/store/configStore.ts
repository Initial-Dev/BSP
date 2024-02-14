import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "@/store/Authentication";
import { CartSlice } from "@/store/Cart";
import { ProductsSlice } from "@/store/Products";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    cart: CartSlice,
    product: ProductsSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = typeof store;

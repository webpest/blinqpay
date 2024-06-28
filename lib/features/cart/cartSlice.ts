import { createAppSlice } from "@/lib/createAppSlice";
import type { CartItem, Product } from "@/lib/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { showToast } from "@/app/utils";

export interface CartSliceState {
  items: CartItem[];
}

const initialState: CartSliceState = {
  items: [],
};

export const cartSlice = createAppSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    addToCart: create.reducer((state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const itemExist = state.items.find((item) => item.id === newItem.id);

      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      showToast.success(`${newItem.title} added`);
    }),
    increaseQty: create.reducer(
      (state, action: PayloadAction<{ id: number }>) => {
        const { id } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity++;
        }
      }
    ),
    decreaseQty: create.reducer(
      (state, action: PayloadAction<{ id: number }>) => {
        const { id } = action.payload;
        const item = state.items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      }
    ),
    deleteFromCart: create.reducer(
      (state, action: PayloadAction<{ id: number }>) => {
        const { id } = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
      }
    ),
  }),
  selectors: {
    selectCartCount: (cart) =>
      cart.items.reduce((acc, item) => acc + item.quantity, 0),
    selectCartTotalAmount: (cart) =>
      cart.items.reduce((total, item) => total + item.price * item.quantity, 0),
  },
});

export const { addToCart, increaseQty, decreaseQty, deleteFromCart } =
  cartSlice.actions;

export const { selectCartCount, selectCartTotalAmount } = cartSlice.selectors;

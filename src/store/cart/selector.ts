import { RootState } from "../index";

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: number) => (state: RootState) =>
  state.cart.items.find((obj: { id: number }) => obj.id === id);

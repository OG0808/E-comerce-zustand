import { create } from "zustand";

const useShowcart = create((set, get) => ({
  Cart: false,
  showCart: () => set({ Cart: !get().Cart }),
}));

export default useShowcart;

import { create } from "zustand";

const useShowcart = create((set, get) => ({
  Cart: true,
  showCart: () => set({ Cart: !get().Cart }),
}));

export default useShowcart;

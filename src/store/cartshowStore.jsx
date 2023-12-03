import { create } from "zustand";

const useShowcart = create((set, get) => ({
  Cart: true,
  Onmenu:false,
  showCart: () => set({ Cart: !get().Cart }),
  showMenu: () => set({ Onmenu: !get().Onmenu }),

}));

export default useShowcart;

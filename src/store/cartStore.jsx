import {create} from "zustand"


const useCartStore = create((set) => ({
    cartProducts: [],
    addItem: (cartProducts) => set((state) => ({ cartProducts: [...state.cartProducts, cartProducts] })),
    clearCart: () => set({ cartProducts: [] }),
  }));
  
  export default useCartStore;
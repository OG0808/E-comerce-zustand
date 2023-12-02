import {create} from "zustand"

const useCartStore = create((set) => ({
    cartProducts: [],
    totalPrice: 0,
    addItem: (newProduct) => set((state) => {
        const existingProduct = state.cartProducts.find(item => item.id === newProduct.id);
        let updatedCartProducts;
        if (existingProduct) {
            updatedCartProducts = state.cartProducts.map(product =>
                product.id === newProduct.id ? {...product, quantity: product.quantity + 1} : product
            );
        } else {
            updatedCartProducts = [...state.cartProducts, {...newProduct, quantity: 1}];
        }
        return {
            cartProducts: updatedCartProducts,
            totalPrice: updatedCartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
        };
    }),
    removeItem: (productId) => set((state) => {
        const productToRemove = state.cartProducts.find(item => item.id === productId);
        const updatedCartProducts = state.cartProducts.filter((item) => item.id !== productId);
        return {
            cartProducts: updatedCartProducts,
            totalPrice: state.totalPrice - (productToRemove.price * productToRemove.quantity)
        };
    }),
    decreaseItem: (productId) => set((state) => {
        const productToDecrease = state.cartProducts.find(item => item.id === productId);
        let updatedCartProducts;
        if (productToDecrease.quantity > 1) {
            updatedCartProducts = state.cartProducts.map(product =>
                product.id === productId ? {...product, quantity: product.quantity - 1} : product
            );
        } else {
            updatedCartProducts = state.cartProducts.filter((item) => item.id !== productId);
        }
        return {
            cartProducts: updatedCartProducts,
            totalPrice: state.totalPrice - productToDecrease.price
        };
    }),
    clearCart: () => set({ cartProducts: [], totalPrice: 0 }),
}));

export default useCartStore;


  // import {create} from "zustand"

  // const useCartStore = create((set) => ({
  //   cartProducts: [],
  //   totalPrice: 0,
  //   addItem: (cartProducts) => set((state) => ({
  //     cartProducts: state.cartProducts.map((product) => {
  //       if (product.id === cartProducts.id) {
  //         product.quantity++;
  //       }
  //       return product;
  //     }),
  //     totalPrice: [...state.cartProducts, cartProducts].reduce((total, product) => total + product.price, 0),
  //   })),
  //   removeItem: (productId) => set((state) => ({ cartProducts: state.cartProducts.filter((item) => item.id !== productId),})),
  //   clearCart: () => set({ cartProducts: [] }),
  // }));
  
  // export default useCartStore;
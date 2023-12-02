import { create } from "zustand";

const useCategory = create((set) => ({
  category: "",
  newCategory: (newCategory) => set({ category: newCategory }),
}));

export default useCategory;

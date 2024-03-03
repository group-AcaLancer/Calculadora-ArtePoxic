import { create } from "zustand";

const useSelectedType = create((set) => ({
  selectedType: null,
  setSelectedType: (option) => set({ selectedType: option }),
}));

export default useSelectedType;

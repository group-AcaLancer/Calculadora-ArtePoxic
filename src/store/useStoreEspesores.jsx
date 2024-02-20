import {create} from 'zustand';

const useStoreEspesores = create(set => ({
  text: '',
  setText: (newText) => set({ text: newText }),
}));

export default useStoreEspesores;  
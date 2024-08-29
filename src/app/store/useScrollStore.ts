import { create } from "zustand";

interface State {
  ref: any;
  setRef: (ref: any) => void;
}

const useScrollStore = create<State>((set) => ({
  ref: null,
  setRef: (ref) => set({ ref }),
}));

export default useScrollStore;

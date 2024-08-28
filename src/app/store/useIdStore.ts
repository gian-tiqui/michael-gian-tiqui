import { create } from "zustand";

interface State {
  id: string;
  setId: (value: string) => void;
}

const useIdStore = create<State>((set) => ({
  id: "",
  setId: (id: string) => set({ id }),
}));

export default useIdStore;

import { create } from "zustand";

interface CardModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCardModal = create<CardModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCardModal;
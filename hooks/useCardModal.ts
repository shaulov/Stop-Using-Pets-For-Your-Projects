import { create } from "zustand";
import { Project } from "@/type";

interface CardModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  cardData: Project;
  setCardData: (data: Project) => void
}

const useCardModal = create<CardModalStore>((set) => ({
  isOpen: false,
  cardData: {
    id: '',
    title: '',
    tags: [''],
    description: '',
    fullDescription: '',
    imgUrl: '',
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }), 
  setCardData: (data) => set({ cardData: data }),
}));

export default useCardModal;
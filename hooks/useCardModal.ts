import { create } from "zustand";
import { CardData } from "@/type";

interface CardModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  cardData: CardData;
  setCardData: (data: CardData) => void
}

const useCardModal = create<CardModalStore>((set) => ({
  isOpen: false,
  cardData: {
    id: '',
    title: '',
    tags: [''],
    description: '',
    imgUrl: '',
    participantNumber: 0,
  },
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }), 
  setCardData: (data) => set({ cardData: data }),
}));

export default useCardModal;
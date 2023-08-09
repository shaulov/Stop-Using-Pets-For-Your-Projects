import Modal from "@/components/Modal";
import useCardModal from "@/hooks/useCardModal";

function CardModal() {
  const { isOpen, onClose } = useCardModal();

  const handleChange = (open: boolean) => {
    if (!open) onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onChange={handleChange}
      title="Project #5"
    >
      <p>Card modal!</p>
    </Modal>
  );
}

export default CardModal;
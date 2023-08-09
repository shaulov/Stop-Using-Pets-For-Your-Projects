import Modal from "@/components/Modal/Modal";
import useCardModal from "@/hooks/useCardModal";
import ProjectFullCard from "./ProjectFullCard/ProjectFullCard";

function CardModal() {
  const { isOpen, onClose } = useCardModal();

  const handleChange = (open: boolean) => {
    if (!open) onClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onChange={handleChange}
      title="Подробнее"
    >
      <ProjectFullCard />
    </Modal>
  );
}

export default CardModal;
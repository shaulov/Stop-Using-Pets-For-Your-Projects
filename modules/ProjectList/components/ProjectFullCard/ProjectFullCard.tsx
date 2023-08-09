import useCardModal from "@/hooks/useCardModal";
import Button from "@/components/Buttons/Button";
import styles from "./styles.module.css";

function ProjectFullCard() {
  const { cardData } = useCardModal();
  return (
    <article className={styles.card}>
      <p>{cardData?.description}</p>
      <Button onClick={() => console.log('tik tok on the clock')}>Откликнуться</Button>
    </article>
  );
}

export default ProjectFullCard;
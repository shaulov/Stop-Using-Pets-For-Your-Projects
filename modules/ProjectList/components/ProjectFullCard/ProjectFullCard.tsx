import useCardModal from "@/hooks/useCardModal";
import LikeButton from "../LikeButton/LikeButton";
import Button from "@/components/Buttons/Button";
import styles from "./styles.module.css";

function ProjectFullCard() {
  const { cardData } = useCardModal();
  return (
    <article className={styles.card}>
      <p>{cardData?.description}</p>
      <div className={styles.card_buttons}>
        <LikeButton projectId={cardData.id} />
        <Button onClick={() => console.log('tik tok on the clock')}>Откликнуться</Button>
      </div>
    </article>
  );
}

export default ProjectFullCard;
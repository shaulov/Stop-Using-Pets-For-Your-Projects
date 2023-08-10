import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./styles.module.css";
import useFavoriteStatus from "@/hooks/useFavoriteStatus";

interface LikeButtonProps {
  projectId: string;
}

function LikeButton({ projectId }: LikeButtonProps) {
  const isLiked = useFavoriteStatus(projectId);

  const handleClick = () => {
    console.log(projectId);
  }

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  return (
    <button className={styles.like_button} onClick={handleClick}>
      <span className="visually-hidden">Like button</span>
      <Icon className={styles.icon} size={48} />
    </button>
  );
}

export default LikeButton;
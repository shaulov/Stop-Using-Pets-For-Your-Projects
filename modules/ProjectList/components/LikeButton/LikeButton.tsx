import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./styles.module.css";

interface LikeButtonProps {
  projectId: string;
}

function LikeButton({ projectId }: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
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
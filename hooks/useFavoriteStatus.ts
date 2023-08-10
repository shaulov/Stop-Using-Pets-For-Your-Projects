import { useEffect, useState } from "react"

const useFavoriteStatus = (id: string): boolean => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const data = false;
    setIsLiked(data);
  }, []);

  return isLiked;
}

export default useFavoriteStatus;
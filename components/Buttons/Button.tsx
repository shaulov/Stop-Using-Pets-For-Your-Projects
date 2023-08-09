import { ReactNode } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, className, disabled = false }: ButtonProps) {
	return (
		<button 
      disabled={disabled} 
      onClick={onClick} 
      className={`${styles.button} ${styles.primary} ${className ? className : ""}`}
    >
			{children}
		</button>
	);
}

export default Button;
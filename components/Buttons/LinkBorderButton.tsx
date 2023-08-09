import { ReactNode } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

type LinkProps = {
  href: string;
  children: string | ReactNode;
  className?: string;
  target?: boolean;
}

function LinkBorderButton({ href, children, className, target = false }: LinkProps) {
	return (
		<Link
			className={`${styles.button} ${styles.secondary} ${className ? className : ""}`}
			href={href} target={target ? '_blank': '_self'} rel="noreferrer">
			{children}
		</Link>
	)
}

export default LinkBorderButton;
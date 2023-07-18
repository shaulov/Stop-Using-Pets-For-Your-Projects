import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function BorderButton({ children, onClick, className, disabled = false }: ButtonProps) {
	return (
		<Wrapper disabled={disabled} onClick={onClick} className={`button ${className ? className : ""}`}>
			{children}
		</Wrapper>
	);
}

const Wrapper = styled.button`
  padding: 20px 60px;
  font-family: 'Gravity', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 120%;
  color: #FFFFFF;
	background-color: #2A69DD;
	border: 2px solid #FFFFFF;
	border-radius: 50px;
  cursor: pointer;
	&:hover{
    color: #2A69DD;
		background: #FFFFFF;
	}
	&:disabled{
    color: #8DB5F3;
    background-color: #006BE5;
		border: 1px dashed #8DB5F3;
    cursor: not-allowed;;
		&:hover{
      color: #8DB5F3;
      background-color: #006BE5;
			border: 1px dashed #8DB5F3;
		}
	}
`;

export default BorderButton;
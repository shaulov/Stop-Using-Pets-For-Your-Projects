import { ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: string | ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, className, disabled = false }: ButtonProps) {
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
		background: #1F55B7;
	}
	&:disabled{
    color: #ABAFB3;
    background-color: #E1E4E7;
    cursor: not-allowed;;
		&:hover{
      color: #ABAFB3;
      background-color: #E1E4E7;
		}
	}
`;

export default Button;
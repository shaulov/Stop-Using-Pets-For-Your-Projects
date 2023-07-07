import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

type LinkProps = {
  href: string;
  children: string | ReactNode;
  className?: string;
  target?: boolean;
}

function LinkBorderButton({ href, children, className, target = false }: LinkProps) {
	return (
		target ? (
			<WrapperTargetLink
				className={`link_button ${className ? className : ""}`}
				href={href} target="_blank" rel="noreferrer">
				{children}
			</WrapperTargetLink>
		) : (
			<WrapperLink
				className={`link_button ${className ? className : ""}`}
				href={href}>
				{children}
			</WrapperLink>
		)
	)
}

const WrapperTargetLink = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
  padding: 20px 60px;
  font-family: 'Gravity', sans-serif;
	font-weight: 700;
	font-size: 16px;
	line-height: 120%;
	color: #FFFFFF;
  text-align: center;
  background-color: #2A69DD;
  border: 2px solid #FFFFFF;
	border-radius: 50px;
	&:hover{
		color: #2A69DD;
    background-color: #FFFFFF;
	}
`

const WrapperLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 20px 60px;
  font-family: 'Gravity', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
  text-align: center;
  background-color: #2A69DD;
  border: 2px solid #FFFFFF;
  border-radius: 50px;
  &:hover{
		color: #2A69DD;
    background-color: #FFFFFF;
  }
`

export default LinkBorderButton;
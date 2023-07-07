import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";

type LinkProps = {
  href: string;
  children: string | ReactNode;
  className?: string;
}

function LinkArrow({ href, className, children }: LinkProps) {
	return (
		<Wrapper href={href} className={`link_arrow ${className ? className : ""}`}>
			{children}
			<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M3.25781 0.525421C2.98167 0.525421 2.75781 0.749279 2.75781 1.02542C2.75781 1.30156 2.98167 1.52542 3.25781 1.52542L8.76747 1.52542L0.146446 10.1464C-0.0488162 10.3417 -0.0488161 10.6583 0.146445 10.8536C0.341708 11.0488 0.658291 11.0488 0.853553 10.8536L9.47445 2.23266V7.74206C9.47445 8.0182 9.6983 8.24206 9.97445 8.24206C10.2506 8.24206 10.4744 8.0182 10.4744 7.74206V1.12542C10.4744 0.79405 10.2058 0.525421 9.87445 0.525421H3.25781Z"/>
			</svg>
		</Wrapper>
	)
}

const Wrapper = styled(Link)`
	display: inline-flex;
	align-items: center;
  font-size: 14px;
	font-weight: 700;
	line-height: 120%;
  color: #242628;
	text-transform: uppercase;
	&:hover{
		color: #2A69DD;
		svg{
			fill: #2A69DD;
		}
	}
	svg{
		fill: #242628;
		margin-left: 4px;
	}
`

export default LinkArrow;
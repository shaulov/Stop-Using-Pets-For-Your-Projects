import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  className?: string;
  width?: number;
  children: ReactNode;
}

function Container({ className, width = 1200, children }: ContainerProps) {
  return (
    <Wrapper
      className={`container ${className ? className : ''}`}
      $width={`${width}px`}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $width?: string }>`
  position: relative;
	max-width: ${props => props.$width};
	width: calc(100% - 40px);
	margin: 0 auto;
`;

export default Container;
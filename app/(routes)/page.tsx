'use client';

import { styled } from "styled-components"
import Button from "@/components/Buttons/Button";
import BorderButton from "@/components/Buttons/BorderButton";
import LinkArrow from "@/components/LinkButtons/LinkArrow";
import LinkButton from "@/components/LinkButtons/LinkButton";
import LinkBorderButton from "@/components/LinkButtons/LinkBorderButton";

export default function Home() {
  return (
    <Wrapper>
      <Button onClick={() => console.log('click')}>Simple button</Button>
      <BorderButton onClick={() => console.log('click')} disabled>BorderButton</BorderButton>
      <LinkButton href="#" target>Link Button</LinkButton>
      <LinkBorderButton href="#">Link Border Button</LinkBorderButton>
      <LinkArrow href="#">Link Arrow</LinkArrow>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
`;

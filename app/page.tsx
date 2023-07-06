'use client';

import { styled } from "styled-components"

export default function Home() {
  return (
    <Wrapper>
      <p>Hi</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  p {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: red;
  }
`;

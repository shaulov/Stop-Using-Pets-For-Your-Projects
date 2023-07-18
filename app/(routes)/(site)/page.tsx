'use client';

import { styled } from "styled-components"
import Header from "@/components/Header";
import Promo from "./components/Promo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Promo />
      </main>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: dense;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: calc(100vh - 96px);
`;

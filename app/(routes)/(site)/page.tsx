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
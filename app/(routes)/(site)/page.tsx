'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promo from "./components/Promo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Promo />
      </main>
      <Footer />
    </>
  )
}
'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promo from "./components/Promo";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
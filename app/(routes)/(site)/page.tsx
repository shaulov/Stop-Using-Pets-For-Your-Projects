'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promo from "./components/Promo";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
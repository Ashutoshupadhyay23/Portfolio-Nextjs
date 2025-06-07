"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />+{" "}
      </main>

      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white shadow-lg 
          hover:bg-gray-800 hover:scale-110 transform transition-all duration-300 
          z-50 flex items-center justify-center cursor-pointer
          ${
            showTopBtn
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

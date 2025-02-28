
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Performance from "@/components/Performance";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Index = () => {
  useEffect(() => {
    // Force dark mode by adding the dark class to the document
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-on-scroll");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("is-visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check to reveal elements already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

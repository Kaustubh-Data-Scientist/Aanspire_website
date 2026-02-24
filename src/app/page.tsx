import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#05080a] min-h-screen text-white overflow-hidden">
      <Hero />
      <About />
      <Products />
      <Vision />
      <Contact />
    </main>
  );
}

import Image from "next/image";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero message="You haven’t had chicken until you taste Ty’s Chicken!" />
      <Menu title="Menu" />
      <About title="About" />
      <Gallery title="Gallery" />
      <Footer title="Footer" />
    </main>
  );
}

import Image from "next/image";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Kids from "./components/Kids";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero message="You haven’t had chicken until you taste Ty’s Chicken!" />
      <Menu title="Menu" />
      <Kids
        title="Kids Menu"
        subtitle="They love chicken too!"
        message="Get any of the menu specials in a kids cup"
      />
      <About title="About" />
      <Gallery title="Gallery" />
    </main>
  );
}

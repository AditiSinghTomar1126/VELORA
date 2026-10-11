import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Packages from "../components/sections/Packages";
import Gallery from "../components/sections/Gallery";
import Team from "../components/sections/Team";
import BookingCTA from "../components/sections/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services preview />
      <Packages />
      <Gallery preview />
      <Team />
      <BookingCTA />
    </>
  );
}
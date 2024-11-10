import Banner from "@/components/banner";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Contact />
    </main>
  );
}

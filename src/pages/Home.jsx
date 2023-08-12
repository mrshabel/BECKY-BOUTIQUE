import Latest from "../components/Home/Latest";
import Trending from "../components/Home/Trending";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <section className="p-12">
      <Hero />
      <main className="pt-12">
        <Latest />
        <Trending />
      </main>
    </section>
  );
}

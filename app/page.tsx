import Image from "next/image";
import Hero from "./hero";
import Pricing from "./pricing";

export default function Home() {
  return (
    <main className="min-h-screen dark">
      <Hero/>
      <Pricing/>
    </main>
  );
}

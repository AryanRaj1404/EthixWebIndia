import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FeaturedWork from "@/components/FeaturedWork";
import WhyEthixweb from "@/components/WhyEthixweb";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <FeaturedWork />
      <WhyEthixweb />
    </main>
  );
}
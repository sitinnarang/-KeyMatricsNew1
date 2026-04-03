import Hero from "@/components/home/Hero";
import TrustBand from "@/components/home/TrustBand";
import Services from "@/components/home/Services";
import Automation from "@/components/home/Automation";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import Newsletter from "@/components/home/Newsletter";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <Services />
      <Automation />
      <Stats />
      <Process />
      <About />
      <Team />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <CTA />
    </main>
  );
}

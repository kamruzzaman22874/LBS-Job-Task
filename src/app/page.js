import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Experts from "@/components/Experts/Experts";
import ExploreWorks from "@/components/ExploreWorks/ExploreWorks";
import Help from "@/components/Help/Help";
import OurBlogs from "@/components/OurBlogs/OurBlogs";
import Services from "@/components/Services/Services";
import Sponsor from "@/components/Sponsor/Sponsor";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Help />
      <Experts />
      <Sponsor />
      <About />
      <ExploreWorks />
      <OurBlogs />
    </main>
  );
}

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Links from "@/components/links";
import NavBar from "@/components/nav-bar";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <div className="w-full lg:w-3/5">
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Links/>
      </div>
    </>
  );
}
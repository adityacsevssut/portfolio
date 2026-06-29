import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProfileSummary } from "@/components/ProfileSummary";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SkillProgress } from "@/components/SkillProgress";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { LeetcodeDashboard } from "@/components/LeetcodeDashboard";

import { Certifications } from "@/components/Certifications";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--foreground)] selection:bg-[#EF4444] selection:text-white">
      <Navbar />
      <Hero />
      <ProfileSummary />
      <About />
      <Skills />
      <SkillProgress />
      <LeetcodeDashboard />
      <Projects />
      <Experience />

      <Certifications />
      <Hobbies />
      <Contact />
      <Footer />
    </main>
  );
}

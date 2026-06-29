import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProfileSummary } from "@/components/ProfileSummary";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import dynamic from "next/dynamic";

const SkillProgress = dynamic(() => import('@/components/SkillProgress').then(mod => mod.SkillProgress), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects').then(mod => mod.Projects), { ssr: true });
const Experience = dynamic(() => import('@/components/Experience').then(mod => mod.Experience), { ssr: true });
const LeetcodeDashboard = dynamic(() => import('@/components/LeetcodeDashboard').then(mod => mod.LeetcodeDashboard), { ssr: true });
const Certifications = dynamic(() => import('@/components/Certifications').then(mod => mod.Certifications), { ssr: true });
const Hobbies = dynamic(() => import('@/components/Hobbies').then(mod => mod.Hobbies), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer), { ssr: true });

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

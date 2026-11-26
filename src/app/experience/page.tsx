import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Experience",
  description: "Internships, engineering experience, and certifications of Aditya Nahak.",
};

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <Certifications />
    </>
  );
}

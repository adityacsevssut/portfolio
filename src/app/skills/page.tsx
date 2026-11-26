import type { Metadata } from "next";
import { Skills } from "@/components/Skills";
import { SkillProgress } from "@/components/SkillProgress";
import { LeetcodeDashboard } from "@/components/LeetcodeDashboard";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills tree, stack proficiency, and LeetCode DSA progress.",
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <SkillProgress />
      <LeetcodeDashboard />
    </>
  );
}

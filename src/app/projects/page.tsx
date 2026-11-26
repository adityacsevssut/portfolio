import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack, frontend, and algorithmic projects built by Aditya Nahak.",
};

export default function ProjectsPage() {
  return <Projects />;
}

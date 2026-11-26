import type { Metadata } from "next";
import { ProfileSummary } from "@/components/ProfileSummary";
import { About } from "@/components/About";
import { Hobbies } from "@/components/Hobbies";

export const metadata: Metadata = {
  title: "About",
  description: "Developer profile, background, and hobbies of Aditya Nahak.",
};

export default function AboutPage() {
  return (
    <>
      <ProfileSummary />
      <About />
      <Hobbies />
    </>
  );
}

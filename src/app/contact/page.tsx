import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Aditya Nahak for collaboration and opportunities.",
};

export default function ContactPage() {
  return <Contact />;
}

import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akshat Patel — software engineer open to full-time opportunities in cloud-native and product engineering.",
};

export default function ContactPage() {
  return <ContactContent />;
}

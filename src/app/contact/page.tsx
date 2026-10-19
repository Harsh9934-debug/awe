import type { Metadata } from "next";
import { contactPageData } from "@/data/pages/contact";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: contactPageData.title,
  description: contactPageData.description,
};

export default function ContactPage() {
  return <PageView data={contactPageData} />;
}

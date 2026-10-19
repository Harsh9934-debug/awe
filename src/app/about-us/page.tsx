import type { Metadata } from "next";
import { aboutUsPageData } from "@/data/pages/about-us";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: aboutUsPageData.title,
  description: aboutUsPageData.description,
};

export default function AboutUsPage() {
  return <PageView data={aboutUsPageData} />;
}

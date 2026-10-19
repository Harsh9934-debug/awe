import type { Metadata } from "next";
import { aiOsPageData } from "@/data/pages/ai-os";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: aiOsPageData.title,
  description: aiOsPageData.description,
};

export default function AiOsPage() {
  return <PageView data={aiOsPageData} />;
}

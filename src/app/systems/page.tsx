import type { Metadata } from "next";
import { systemsPageData } from "@/data/pages/systems";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: systemsPageData.title,
  description: systemsPageData.description,
};

export default function SystemsPage() {
  return <PageView data={systemsPageData} />;
}

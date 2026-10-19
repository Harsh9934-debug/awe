import type { Metadata } from "next";
import { deploymentPageData } from "@/data/pages/deployment";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: deploymentPageData.title,
  description: deploymentPageData.description,
};

export default function DeploymentPage() {
  return <PageView data={deploymentPageData} />;
}

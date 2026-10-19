import type { Metadata } from "next";
import { homePageData } from "@/data/pages/index";
import PageView from "@/components/PageView";

export const metadata: Metadata = {
  title: homePageData.title,
  description: homePageData.description,
};

export default function HomePage() {
  return <PageView data={homePageData} />;
}

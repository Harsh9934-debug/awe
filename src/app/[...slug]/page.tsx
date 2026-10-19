import React from "react";
import fs from "fs";
import path from "path";
import ClonedPageRenderer from "@/components/ClonedPageRenderer";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pagePath = Array.isArray(slug) ? slug.join("/") : "";
  const rootDir = path.join(process.cwd(), "cloned-site");

  let targetFile: string | null = null;
  const file1 = path.join(rootDir, `${pagePath}.html`);
  const file2 = path.join(rootDir, pagePath, "index.html");

  if (fs.existsSync(file1)) targetFile = file1;
  else if (fs.existsSync(file2)) targetFile = file2;

  if (targetFile) {
    const html = fs.readFileSync(targetFile, "utf-8");
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    return {
      title: titleMatch ? titleMatch[1] : "Wonderful | The Enterprise AI OS",
      description: descMatch ? descMatch[1] : "Wonderful helps critical organizations accelerate AI adoption to unlock their full potential.",
    };
  }

  return {
    title: "404 - Page Not Found | Wonderful",
  };
}

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const pagePath = Array.isArray(slug) ? slug.join("/") : "";
  return <ClonedPageRenderer pagePath={pagePath} />;
}

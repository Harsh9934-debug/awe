import React from "react";
import fs from "fs";
import path from "path";

interface ClonedPageRendererProps {
  pagePath: string;
}

export default function ClonedPageRenderer({ pagePath }: ClonedPageRendererProps) {
  const rootDir = path.join(process.cwd(), "cloned-site");
  const cleanPath = pagePath.replace(/^\/+|\/+$/g, "");

  let targetFile: string | null = null;

  if (!cleanPath || cleanPath === "index") {
    targetFile = path.join(rootDir, "index.html");
  } else {
    // 1. Direct html file
    const file1 = path.join(rootDir, `${cleanPath}.html`);
    if (fs.existsSync(file1)) {
      targetFile = file1;
    } else {
      // 2. Directory index.html
      const file2 = path.join(rootDir, cleanPath, "index.html");
      if (fs.existsSync(file2)) {
        targetFile = file2;
      }
    }
  }

  if (!targetFile || !fs.existsSync(targetFile)) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-8 bg-[#08090c] text-white">
        <div>
          <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-zinc-400">The requested page `{pagePath}` was not found in the cloned website.</p>
        </div>
      </div>
    );
  }

  const html = fs.readFileSync(targetFile, "utf-8");

  // Robustly extract head and body
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  // Strip out inert tracking and broken runtime script tags so only stylesheets and fonts are preserved
  const headContent = headMatch
    ? headMatch[1].replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    : "";

  let bodyContent = html;
  const mainIdx = html.indexOf('<div id="main"');
  if (mainIdx !== -1) {
    const bodyEnd = html.lastIndexOf("</body>");
    bodyContent = html.substring(mainIdx, bodyEnd !== -1 ? bodyEnd : html.length);
  } else {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) bodyContent = bodyMatch[1];
  }

  return (
    <>
      <div
        id="__cloned_head_assets__"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: headContent }}
      />
      <div
        id="__cloned_page_root__"
        dangerouslySetInnerHTML={{ __html: bodyContent }}
      />
    </>
  );
}

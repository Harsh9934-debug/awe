"use client";

import React, { useEffect } from "react";
import type { PageDefinition } from "@/data/types";

export default function PageView({ data }: { data: PageDefinition }) {
  useEffect(() => {
    // 1. Ensure all background videos autoplay
    document.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.play().catch(() => {});
    });

    // 2. Load the interactive Framer module bundle
    const scriptId = "__framer_main_runtime__";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.async = true;
      script.src = "/sites/SaiSHo4OFc8hYpn6gVFA4/script_main.CbQZ0SHJ.mjs";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <div
        id="__head_styles__"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{ __html: data.headStyles }}
      />
      <div
        id="__page_root__"
        dangerouslySetInnerHTML={{ __html: data.bodyHtml }}
      />
    </>
  );
}

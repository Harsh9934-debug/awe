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

    // 1b. Swap the brand logo (header + footer) for /logo.png
    // Pick black vs white logo based on the nearest opaque background.
    const isLightBackground = (el: HTMLElement): boolean => {
      let node: HTMLElement | null = el;
      while (node && node !== document.body) {
        const bg = getComputedStyle(node).backgroundColor;
        const m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const parts = m[1].split(",").map((s) => parseFloat(s));
          const [r, g, b] = parts;
          const a = parts.length > 3 ? parts[3] : 1;
          if (a > 0.3) {
            const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            return lum > 0.6;
          }
        }
        node = node.parentElement;
      }
      return false; // transparent over dark hero -> white logo
    };

    const applyLogo = () => {
      document
        .querySelectorAll<HTMLAnchorElement>('a[data-framer-name="Logo"]')
        .forEach((anchor) => {
          const light = isLightBackground(anchor);
          const wantSrc = light ? "/logo-black.png" : "/logo.png";
          const existing = anchor.querySelector<HTMLImageElement>(
            "img[data-custom-logo]"
          );
          if (existing) {
            // Keep the correct variant in sync as the navbar bg changes.
            if (!existing.src.endsWith(wantSrc)) existing.src = wantSrc;
            return;
          }
          const img = document.createElement("img");
          img.src = wantSrc;
          img.alt = "Logo";
          img.setAttribute("data-custom-logo", "");
          img.style.height = "100%";
          img.style.width = "auto";
          img.style.maxHeight = "100%";
          img.style.objectFit = "contain";
          const inFooter = anchor.closest("footer") !== null;
          img.style.transform = inFooter ? "scale(1.3)" : "scale(3.6)";
          img.style.transformOrigin = "left center";
          anchor.replaceChildren(img);
          anchor.style.display = "inline-flex";
          anchor.style.alignItems = "center";
          anchor.style.overflow = "visible";
        });
    };
    // Replace the big faint "wonderful" footer watermark with the AWE mark.
    const applyWatermark = () => {
      document
        .querySelectorAll<HTMLImageElement>(
          'img[src*="EfwFwuoTD4PdYVDGaAhoN1b4ns"]'
        )
        .forEach((img) => {
          img.removeAttribute("srcset");
          img.src = "/logo.png";
          img.style.objectFit = "contain";
          img.style.objectPosition = "center";
          // Lift the faint 0.1-opacity wrapper so the mark actually reads.
          const wrapper = img.closest<HTMLElement>('[style*="opacity"]');
          if (wrapper) wrapper.style.opacity = "0.5";
        });
    };

    // Remove the top announcement banner ("… Raises $550M Series C", etc).
    const removeBanner = () => {
      document
        .querySelectorAll<HTMLElement>(
          '[data-framer-name="Series C announcement"],[data-framer-name^="Announcement -"]'
        )
        .forEach((seed) => {
          let node: HTMLElement | null = seed;
          let bar: HTMLElement | null = null;
          for (let i = 0; i < 14 && node && node !== document.body; i++) {
            const rect = node.getBoundingClientRect();
            const bg = getComputedStyle(node).backgroundImage;
            if (
              bg.includes("gradient") &&
              node.offsetWidth >= window.innerWidth * 0.9 &&
              rect.top < 160
            ) {
              bar = node;
            }
            node = node.parentElement;
          }
          (bar ?? seed).remove();
        });
    };

    applyLogo();
    applyWatermark();
    removeBanner();
    // Re-apply if Framer's runtime repopulates the logo anchors.
    const observer = new MutationObserver(() => {
      applyLogo();
      applyWatermark();
      removeBanner();
    });
    observer.observe(document.body, { childList: true, subtree: true });

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

    return () => observer.disconnect();
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

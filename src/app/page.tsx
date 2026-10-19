import React from "react";
import ClonedPageRenderer from "@/components/ClonedPageRenderer";

export const metadata = {
  title: "Wonderful | The Enterprise AI OS",
  description: "Wonderful helps critical organizations accelerate AI adoption to unlock their full potential.",
};

export default function HomePage() {
  return <ClonedPageRenderer pagePath="index" />;
}

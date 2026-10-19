import React from "react";
import ClonedPageRenderer from "@/components/ClonedPageRenderer";

export const metadata = {
  title: "About Us | Wonderful",
  description: "Wonderful helps critical organizations accelerate AI adoption to unlock their full potential.",
};

export default function AboutUsPage() {
  return <ClonedPageRenderer pagePath="about-us" />;
}

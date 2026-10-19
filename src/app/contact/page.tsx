import React from "react";
import ClonedPageRenderer from "@/components/ClonedPageRenderer";

export const metadata = {
  title: "Contact | Wonderful",
  description: "Get in touch with the Wonderful enterprise team.",
};

export default function ContactPage() {
  return <ClonedPageRenderer pagePath="contact" />;
}

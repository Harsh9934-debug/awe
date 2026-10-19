import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wonderful.ai"),
  title: "AWE Intelligence | The Enterprise AI OS",
  description: "AWE Intelligence helps critical organizations accelerate AI adoption to unlock their full potential.",
  icons: {
    icon: "/images/rN39YiHPBpaL1Jtucx1OrbUwHdc.png",
    apple: "/images/RlVX2Ppi8NAkXgqwDa2IDocBnlI.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased m-0 p-0 overflow-x-hidden bg-[#08090c] text-white">
        {children}
      </body>
    </html>
  );
}

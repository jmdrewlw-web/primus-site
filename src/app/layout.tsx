import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Primus Companies — Commercial General Contractor & Development Partner",
  description: "Clarify. Plan. Build. Deliver. 50 years of commercial construction across the Midwest. From preconstruction through closeout — one team, real numbers, no surprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

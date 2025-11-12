import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accred Alts | Alternative Investment Funds",
  description:
    "Animated explainer highlighting Alternative Investment Funds for Accred Alts."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

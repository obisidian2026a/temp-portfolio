import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imran Bin Hasan | Portfolio",
  description:
    "Professional portfolio website showcasing skills, projects, experience, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${poppins.variable}`}>
      <body className={`min-h-full flex flex-col ${poppins.className}`}>{children}</body>
    </html>
  );
}

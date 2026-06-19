import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Scribblit",
  description: "Have smth your itching to draw? Well just login, Scribblit, and get added to gallary of millions of other artists all showcasing their scribbles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col bg-amber-200 `}>{children}</body>
    </html>
  );
}

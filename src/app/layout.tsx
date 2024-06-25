import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";


export const metadata: Metadata = {
  title: "Shey Shop",
  description: "An e-commerce site built with Next.js and typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Jakub Owczarek | Portfolio",
  description: "Portfolio - projekty, doświadczenie i kontakt.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className="page-bg">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

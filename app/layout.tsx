import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Matrix",
  description: "Descrube nuevas peliculas y series",
  keywords:
    "movie, movies, series, tv, tv series, netflix, amazon prime, disney+",
  authors: [{ name: "Santiago Cano" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: { rel: "icon", url: "/favicon.ico" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

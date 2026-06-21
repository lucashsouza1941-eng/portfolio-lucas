import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-lucas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Lucas | Developer Full-Stack",
  description:
    "Portfólio de Lucas, desenvolvedor Full-Stack. Construo aplicações web modernas do front ao back com foco em experiência do usuário e código limpo.",
  keywords: [
    "Lucas",
    "Desenvolvedor Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfólio",
  ],
  authors: [{ name: "Lucas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Portfólio do Lucas",
    title: "Lucas | Developer Full-Stack",
    description:
      "Construo aplicações web modernas do front ao back com foco em experiência do usuário e código limpo.",
    images: [
      {
        url: "/images/foto-perfil.png",
        width: 1200,
        height: 630,
        alt: "Lucas - Desenvolvedor Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas | Developer Full-Stack",
    description:
      "Construo aplicações web modernas do front ao back com foco em experiência do usuário e código limpo.",
    images: ["/images/foto-perfil.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

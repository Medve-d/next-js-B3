import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | MusiLearn',
    default: 'MusiLearn - École de Musique'
  },
  description: 'Plateforme de gestion de cours MusiLearn',
  keywords: ['musique', 'cours', 'apprentissage'],
  authors: [{ name: 'MusiLearn' }],
  openGraph: {
    images: '/images/og-image.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MusiLearn',
  description: 'Votre plateforme de gestion de cours de musique.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${inter.className} h-full min-h-screen flex flex-col`}>
        <header className="bg-blue-500 p-4">
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 p-4">
        </footer>
      </body>
    </html>
  )
}
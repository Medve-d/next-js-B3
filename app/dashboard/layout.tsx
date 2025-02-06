import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'MusiLearn Dashboard',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full min-h-screen flex flex-col`}>
        <header className="bg-gray-800 text-white p-4">
        </header>
        <main className="flex-grow flex">
          <aside className="w-64 bg-gray-100 p-4">
          </aside>
          <div className="flex-grow p-6">{children}</div>
        </main>
        <footer className="bg-gray-200 p-4">
        </footer>
      </body>
    </html>
  )
}
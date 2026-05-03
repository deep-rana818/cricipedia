import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Cricipedia — The Cricket Encyclopedia',
  description: 'The free cricket encyclopedia anyone can read',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>
        <footer style={{ backgroundColor: 'var(--cricket-green)' }} className="text-white text-center py-4 mt-12 text-sm">
          © 2025 Cricipedia — The Free Cricket Encyclopedia
        </footer>
      </body>
    </html>
  )
}
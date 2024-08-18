import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Next.js TypeScript App',
  description: 'Created with Next.js and TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
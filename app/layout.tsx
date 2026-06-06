import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GIAIC Quiz — AI Prompting 2026',
  description: 'Class 2 concept check. 10 questions. One shot.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
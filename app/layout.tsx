import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'
import './globals.css'

const space_mono = Space_Mono({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'RGA Home',
  description: 'Pagina inicial do sitema da RGA Doces e Salgados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={space_mono.className}>{children}</body>
    </html>
  )
}

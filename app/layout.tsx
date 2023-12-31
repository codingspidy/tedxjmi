import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/Header'

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

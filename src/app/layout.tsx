import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Navigation } from './components/views/Navigation/Navigation'
import './globals.css'

const ttFirsNeue = localFont({
  src: [
    {
      path: '../../public/fonts/TTFirsNeue-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/TTFirsNeue-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-tt-firs-neue',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Certificate Maker Online - Create & Send Digital Certificates',
  description:
    'Certifier is a digital credentials infrastructure. Easily make, share and verify digital certificates on autopilot. All-in-one platform for generation certificates and mass sending emails to recipients. Certificate maker with user friendly interface, ready-made templates, and delivery emails.',
  icons: {
    icon: [
      {
        url: '/favicon/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${ttFirsNeue.variable} font-sans antialiased w-dvw min-h-dvh`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  )
}

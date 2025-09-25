import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Travio - Travel Authentication',
  description: 'Modern travel website authentication interface with elegant design and smooth user experience',
  keywords: 'travel, authentication, login, signup, modern UI, responsive design',
  authors: [{ name: 'Wanderlust Auth UI' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script src="https://kit.fontawesome.com/your-kit-id.js" crossOrigin="anonymous" async></script>
      </head>
      <body className="min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
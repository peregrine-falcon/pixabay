'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import { Provider } from 'react-redux';
import appStore from '@/utils/store/appStore';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Roc8-Assignment</title>
        <meta name='description' content='Roc8-Assignment' />
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-b" rel="stylesheet" />
      </head>
      <Provider store={appStore}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}

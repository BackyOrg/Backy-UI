import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';

import { ReactNode } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Backy',
  description:
    'This project was recreated to explore the use of React with Next.js and to learn new concepts together with my friends.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}

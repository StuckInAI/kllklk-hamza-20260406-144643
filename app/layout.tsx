import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luminary — Build Something Amazing',
  description: 'A modern landing page built with Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

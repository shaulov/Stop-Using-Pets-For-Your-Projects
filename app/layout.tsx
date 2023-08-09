import './globals.css';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import ModalProvider from '@/providers/ModalProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Stop Using Pets for Your Project',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          {children}
          <ModalProvider />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

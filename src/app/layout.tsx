import type { Metadata } from 'next';
import { Comfortaa, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { SidebarProvider } from '@/features/header-navigation/model/SidebarContext';

const comfortaa = Comfortaa({
  variable: '--font-comfortaa',
  subsets: ['latin'],
});


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const Zrnic = localFont({
  src: './fonts/ZrnicCyr-Normal.woff2',
  variable: '--font-zrnic',
});

export const metadata: Metadata = {
  title: 'Центр лазерной медицины',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body className={`${comfortaa.variable} ${Zrnic.variable} ${inter.variable}`}>{children}</body>
      </SidebarProvider>
    </html>
  );
}

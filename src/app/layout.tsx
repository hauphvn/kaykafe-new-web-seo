import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import {OpenGraphWebsiteExtended} from "@/types/openGraph";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Quán Cafe Chuyên Nghiệp',
  description: 'Trải nghiệm cafe đích thực',
  openGraph: {
    title: 'Quán Cafe Chuyên Nghiệp',
    description: 'Không gian cafe sang trọng',
    images: [{ url: '/images/og-image.jpeg' }],
    type:'website',
    app_id: '925130949118763',
  } as OpenGraphWebsiteExtended,
  twitter: {
    card: 'summary_large_image',
    title: 'Tiêu đề website',
    description: 'Mô tả website',
    images: [{ url: '/images/og-image.jpeg' }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

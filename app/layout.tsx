import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dunly - Task Management, Simplified",
  description: "Meet Dunly, your intelligent companion for managing both recurring responsibilities and one-time tasks. With its thoughtfully designed interface, Dunly helps you stay on top of your routines while maintaining the flexibility to handle special projects.",
  keywords: ["Task Management", "iOS App", "Productivity", "Habits", "Organization", "To-Do List", "Recurring Tasks"],
  icons: {
    icon: [
      { url: './images/logo/DunlyLogo.png' },
    ],
    apple: [
      { url: './images/logo/DunlyLogo.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/DunlyLogo.png" />
        <link rel="apple-touch-icon" href="/images/logo/DunlyLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

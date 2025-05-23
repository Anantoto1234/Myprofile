import { Eczar, Work_Sans } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ChibiBackground } from "@/components/ui/chibi-background";
import SocialSidebar from "@/components/SocialSidebar";
import { ChibiProvider } from "@/components/ui/chibi-context";

// Import Eczar font
const eczar = Eczar({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eczar',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-work-sans',
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Tố An",
  description: "Khám phá portfolio cá nhân của Tố An – sinh viên lớp 22SE2, Trường Đại học CNTT & Truyền thông Việt – Hàn.",
  openGraph: {
    title: "Portfolio Tố An",
    description: "Tác phẩm thiết kế, dự án web, và ý tưởng sáng tạo từ Tố An – sinh viên lớp 22SE2, Đại học CNTT & Truyền thông Việt – Hàn.",
    url: "https://portfolio-to-an.vercel.app",
    siteName: "Portfolio Tố An",
    images: [
      {
        url: "https://portfolio-to-an.vercel.app/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Ảnh đại diện Portfolio Tố An",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Tố An",
    description: "Tác phẩm thiết kế và dự án UI/UX nổi bật của Tố An – sinh viên UIT-VKU.",
    images: ["https://portfolio-to-an.vercel.app/thumbnail.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png", // nếu có
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${eczar.variable} antialiased "bg-[rgb(255,250,245)] dark:bg-[rgb(20,20,30)]`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
          <Navbar />
          <CustomCursor />
          <div className="relative">
            <ChibiProvider>
              {children}
            </ChibiProvider>
          </div>
          <SocialSidebar />
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}
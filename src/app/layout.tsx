import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";
import GoogleTranslate from "@/components/GoogleTranslate";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Key Metrics Accounting | Calgary",
  description:
    "Key Metrics Accounting is Calgary's trusted accounting firm offering corporate & personal tax, bookkeeping, payroll, financial planning, and cloud accounting solutions for individuals and businesses.",
  keywords: [
    "Calgary accountant",
    "tax preparation Calgary",
    "bookkeeping Calgary",
    "Key Metrics Accounting",
    "small business accounting",
    "corporate tax Canada",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-bg text-fg">
        <ThemeProvider>
          <GoogleTranslate />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { QueryProvider } from '@/components/providers/query-provider'
import { ClerkClientProvider } from '@/components/providers/clerk-provider'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { EnsureProfile } from "@/components/auth/ensure-profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Nemesis - Find Your Rival, Achieve Your Goals",
  description: "Match with your nemesis and use friendly rivalry to achieve your goals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <QueryProvider>
            <ClerkClientProvider>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
              <Toaster />
              <EnsureProfile />
            </ClerkClientProvider>
          </QueryProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}

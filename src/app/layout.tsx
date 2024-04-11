import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import NextTopLoaderProvider from "@/providers/next-top-loader-provider";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} outline-none bg-slate-950 text-white flex justify-center w-full relative`}
      >
        <div className="w-full">
          <NextTopLoaderProvider>
            <ClerkProvider>
              {children}
              <Toaster></Toaster>
            </ClerkProvider>
          </NextTopLoaderProvider>
        </div>
      </body>
    </html>
  );
}

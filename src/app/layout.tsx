import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

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
        className={`${inter.className} bg-slate-950 flex justify-center w-full relative`}
      >
        <div>
          <ClerkProvider>
            {children}
            <Toaster></Toaster>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}

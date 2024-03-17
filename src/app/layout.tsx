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
        className={`${inter.className} bg-black flex justify-center w-full relative`}
      >
        <div className="w-full max-w-[1440px] flex flex-col ">
          <ClerkProvider>{children}</ClerkProvider>
        </div>
      </body>
    </html>
  );
}

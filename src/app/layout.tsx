import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import next from "next";
import { cn } from "@/utils/utils";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "CCF :: Foro Social de Club Constatine",
  description: "Foro Social para los miembros de Club Constatine",
};

const roboto = Roboto({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("min-h-screen bg-background font-roboto antialiased", roboto.className)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
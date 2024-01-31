import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Footer, Navbar } from "@/Components/Organisms";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ernesto Motta - Software Engineer",
  description: "Ernesto Motta's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={" min-h-screen bg-gray-900"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Sans, Oswald, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] })
const popppins = Poppins({ weight: ["300", "400", "600", "800"], subsets: ["latin"], display: "swap" });
// const IBM = IBM_Plex_Sans({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["300", "400", "600", "700"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Corizon",
  description: "My portfolio 24' I'm available for hire",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${popppins.className} bg-black p-2`}>{children}</body>
    </html>
  );
}

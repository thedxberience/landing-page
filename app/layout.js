import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./css/base.css";
import "./css/embla.css";

const inter = Inter({ subsets: ["latin"] });

const saol = localFont({
  src: "./fonts/SaolDisplay-Regular.ttf",
  display: "swap",
});

export const metadata = {
  title: "Dxberience | Home",
  description: "Luxury Concierge Services in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${saol.className}`}>{children}</body>
    </html>
  );
}

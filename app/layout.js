import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../components/LanguageProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fortis Security",
  description: "Spoľahlivý partner pre vašu bezpečnosť",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sk"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#111111] text-white">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
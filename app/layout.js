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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Fortis Security",
    description: "Spoľahlivý partner pre vašu bezpečnosť",
    url: "https://fortissecurity.eu",
    siteName: "Fortis Security",
    images: [
      {
        url: "/gabo-logo.png",
        width: 1200,
        height: 630,
        alt: "Fortis Security",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fortis Security",
    url: "https://fortissecurity.eu",
    logo: "https://fortissecurity.eu/gabo-logo.png",
  };

  return (
    <html
      lang="sk"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>

      <body className="min-h-full bg-[#111111] text-white">
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
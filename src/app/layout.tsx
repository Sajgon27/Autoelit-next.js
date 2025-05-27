import { Noto_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; 
import LenisProvider from "@/app/providers/LenisProvider";
import '@fortawesome/fontawesome-svg-core/styles.css';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    template: '%s — AutoElit Detailing'
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LenisProvider>
    <html lang="en">
      
      <body
        className={`${notoSans.variable}  ${SpaceGrotesk.variable} antialiased`}
      >
        <Header />
        {children}
      <Footer />
      </body>
    
    </html>
    </LenisProvider>
  );
}

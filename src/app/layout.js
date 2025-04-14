import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
          <Providers>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow pt-8">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
      </body>
    </html>
  );
} 
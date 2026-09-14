import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Tukangta.co — Jasa Instalasi Listrik Terpercaya",
    template: "%s | Tukangta.co",
  },
  description:
    "Jasa instalasi listrik, tambah daya, dan perbaikan kelistrikan rumah & bangunan. Tukang bersertifikat, rapi, dan terpercaya.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-poppins antialiased bg-brand-soft relative`}>
        {/* Layer blob global — di belakang Navbar & Hero, menyatu keduanya */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="blob absolute -top-32 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-brand-blue/25 to-brand-gold/20 blur-3xl" />
          <div
            className="blob absolute top-40 -left-24 w-80 h-80 rounded-full bg-gradient-to-tr from-brand-gold/15 to-brand-blue/20 blur-3xl"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
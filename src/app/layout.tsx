import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./css/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300"
});

export const metadata: Metadata = {
  title: "Agro Eduwisata Mulyaharja",
  description: "Temukan keindahan alam yang memikat, jelajahi pesona eksotisnya, dan rasakan kehangatan keramahan lokal yang memanjakan. Di sini, setiap sudutnya menawarkan keajaiban yang menunggu untuk dijelajahi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer />
        <div id="whatsapp-button" className="fixed bottom-5 right-5 z-10">
          <a href="https://wa.me/6281234567890" target="_blank">
            <img src="whatsapp-icon.png" alt="WhatsApp Icon" className="w-16 h-auto cursor-pointer"/>
          </a>
			  </div>
      </body>
    </html>
  );
}

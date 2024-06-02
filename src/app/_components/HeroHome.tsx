import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

interface HeroProps {
  bgImage: string;
}

export default function Hero({ bgImage }: HeroProps) {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-end text-right items-center h-full mr-32 text-white ">
        <div>
          <h1 className={`${poppins.className} text-6xl/tight max-md:text-xl/tight mb-4 w-[21ch]`}>AGRO EDUWISATA ORGANIK MULYAHARJA</h1>
          <p className="text-lg max-md:text-sm/tight mb-4 w-[75ch] pr-3">Temukan keindahan alam yang memikat, jelajahi pesona eksotisnya, dan rasakan kehangatan keramahan lokal yang memanjakan. Di sini, setiap sudutnya menawarkan keajaiban yang menunggu untuk dijelajahi.</p>
        </div>
      </div>
    </div>
  );
}

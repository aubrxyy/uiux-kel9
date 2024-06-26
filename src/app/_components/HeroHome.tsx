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
      <div className="relative z-10 flex justify-end max-lg:justify-center max-lg:text-center text-right items-center h-full lg:mr-32 text-white ">
        <div className="max-lg:container">
          <h1 className={`${poppins.className} text-6xl/tight max-lg:mx-2 max-md:text-5xl mb-4 max-w-[21ch]`}>AGRO EDUWISATA ORGANIK MULYAHARJA</h1>
          <p className="text-lg max-lg:text-md/ max-lg:mx-2 mb-4 max-w-[75ch] lg:pr-3">Temukan keindahan alam yang memikat, jelajahi pesona eksotisnya, dan rasakan kehangatan keramahan lokal yang memanjakan. Di sini, setiap sudutnya menawarkan keajaiban yang menunggu untuk dijelajahi.</p>
        </div>
      </div>
    </div>
  );
}

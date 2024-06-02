import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

interface HeroProps {
  bgImage: string;
  pageTitle: string;
  pageLink: string;
}

export default function Hero({ bgImage, pageTitle, pageLink }: HeroProps) {
  return (
    <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-center text-center items-center h-full text-white ">
        <div>
          <h1 className={`${poppins.className} text-5xl/relaxed`}>{pageTitle}</h1>
          <div className="col-lg-12 text-white">
            <a href="/" className="hover:text-orange-400"> Home </a> → <a href={pageLink} className="hover:text-orange-400">{pageTitle}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

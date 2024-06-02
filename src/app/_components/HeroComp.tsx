'use client'
import * as React from "react";
import { useState } from "react";

interface NavItemProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, isActive, onClick }) => {
  return (
    <button
      className={`flex flex-col ${
        isActive ? "text-green-400 text-opacity-90" : ""
      }`}
      onClick={onClick}
    >
      <div>{text}</div>
      {isActive && (
        <div className="shrink-0 mt-3.5 h-px bg-white border border-white border-solid" />
      )}
    </button>
  );
};

interface ImageProps {
  src: string;
  alt: string;
  className: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

const Navigation: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState<string>("Home");

  return (
    <nav className="flex flex-auto gap-5 items-start self-start mt-5">
      <NavItem
        text="Home"
        isActive={activeNavItem === "Home"}
        onClick={() => setActiveNavItem("Home")}
      />
      <NavItem
        text="About"
        isActive={activeNavItem === "About"}
        onClick={() => setActiveNavItem("About")}
      />
      <NavItem
        text="Fasilities"
        isActive={activeNavItem === "Fasilities"}
        onClick={() => setActiveNavItem("Fasilities")}
      />
    </nav>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex relative gap-5 justify-between self-stretch w-full text-2xl font-bold whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e22aff848d6b827b5c8f69cbb8afc9e82a50b1702f252d4bf46934f5a69218d?apiKey=3a93785370534189b48289e04c179d34&"
            alt="Company Logo"
            className="shrink-0 aspect-[1.08] w-[57px]"
          />
          <div className="flex-auto self-end mt-5">Mulyaharja</div>
        </div>
        <Navigation />
      </div>
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa1dc1022e83c30d9ddfa904e556b1122c9672b87833ae77556413029b6c76c?apiKey=3a93785370534189b48289e04c179d34&"
        alt="Profile Picture"
        className="shrink-0 my-auto border-white border-solid aspect-[1.3] border-[3px] stroke-[3px] stroke-white w-[39px]"
      />
    </header>
  );
};

const HeroComp: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-start px-11 pt-7 pb-20 w-full text-white min-h-[819px] max-md:px-5 max-md:max-w-full">
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd773a2443ff60148eb68bb478130e83378db783a6a1ce8fd9109558a9f7c9b?apiKey=3a93785370534189b48289e04c179d34&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <Header />
      <h1 className="relative mt-60 ml-36 text-4xl max-md:mt-10 max-md:max-w-full">
        AGRO EDU WISATA ORGANIK
      </h1>
      <h2 className="relative mt-7 ml-32 text-9xl max-md:max-w-full max-md:text-4xl">
        MULYAHARJA
      </h2>
      <a
        href="/reservations"
        className="relative justify-center px-6 py-5 mt-4 mb-32 ml-32 text-3xl bg-amber-300 rounded-3xl text-teal-950 text-opacity-90 max-md:px-5 max-md:mb-10 max-md:ml-2.5"
      >
        Reservasi Online
      </a>
    </div>
  );
};

export default HeroComp;
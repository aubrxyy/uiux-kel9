"use client"

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import "../css/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const navigation = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "FACILITY", href: "/facility" },
  { name: "PAKET WISATA", href: "/paket-wisata" },
  { name: "MENU", href: "/menu" },
  { name: "GARDU COFFEE", href: "/cafe" },
];

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      setShowHeader(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
      setIsTop(window.scrollY === 0);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <Disclosure as="nav" className={`z-50 fixed w-full py-3 transition-all duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${isTop && !isPanelOpen ? 'bg-transparent' : 'bg-[#04091e]'}`}>
      {({ open }) => (
        <>
          {setIsPanelOpen(open)}
          <div className="mx-auto max-w-[95%] px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image src="/logoMulyaharja.png" width={80} height={80} alt="Logo Mulyaharja" />
                  <p className={`${poppins.className} text-white text-2xl ml-2`}>Mulyaharja</p>
                </div>
                <div className="hidden pt-2 lg:ml-auto mr-8 lg:block my-auto">
                  <div className="flex space-x-16">
                    {navigation.map((item) => {
                      const isActive = pathname.endsWith(item.href);
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`${isActive ? "text-orange-400" : "text-gray-50 hover:text-orange-400 text-nowrap"} ${poppins.className} transition-all text-sm block px-3 py-2 mx-2 lg:p-0`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden bg-[#04091eD9] ">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 ">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`${
                    pathname.endsWith(item.href)
                      ? "bg-dgreen text-orange-400 rounded-lg"
                      : "text-white hover:text-orange-400 max-lg:active:text-orange-200 text-nowrap"
                  } text-2xl rounded-xl block px-3 py-2 mx-3 transition-all lg:p-1`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

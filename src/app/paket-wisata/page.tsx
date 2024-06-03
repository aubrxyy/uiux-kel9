'use client';
import { useEffect, useState } from 'react';
import { Poppins } from "next/font/google";
import Hero from "../_components/Hero";

type TourPackage = {
  id_paket: string;
  nama_paket: string;
  deskripsi: string;
  deskripsi_harga: string;
  harga: number;
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

const ColumnsPage = () => {
  const [tourPackages, setTourPackages] = useState<TourPackage[]>([]);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await fetch('/api/tour_package');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: TourPackage[] = await response.json();
        setTourPackages(data);
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      }
    };

    fetchTourPackages();
  }, []);

  return (
     <>
        <Hero bgImage="/paketwisata.jpg" pageTitle="Paket Wisata" pageLink="/paket-wisata" />

        <section className='pb-28 pt-16 bg-white'>
            <div className="mx-36">
                <div className='flex flex-wrap items-center gap-16 justify-center 2xl:justify-center'>
                {tourPackages.map((pkg) => (
                    <div key={pkg.id_paket} className='shadow-lg max-lg:w-[60rem] w-96 lg:min-h-[35rem] p-4 rounded-xl transition-all'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>{pkg.nama_paket}</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <h1 className={`${poppins.className} text-left my-4 text-md/ w-[25ch]`}>{pkg.deskripsi_harga}</h1>
                        <p dangerouslySetInnerHTML={{ __html: pkg.deskripsi.replace(/\n/g, '<br /><br />') }} className='mb-3 text-justify text-gray-500'></p>
                    </div>
                ))}
                </div>

            </div>
        </section>
     </>

  );
};

export default ColumnsPage;

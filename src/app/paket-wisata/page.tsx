import { Poppins } from "next/font/google";
import Hero from "../_components/Hero";
import { query } from '../lib/db';

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

type TourPackage = {
  id_paket: string;
  nama_paket: string;
  deskripsi: string;
  deskripsi_harga: string;
  harga: number;
};

const ColumnsPage = async () => {
  let tourPackages: TourPackage[] = [];

  try {
    const result = await query('SELECT id_paket, nama_paket, deskripsi, deskripsi_harga, harga FROM project.tour_package');
    tourPackages = result.rows.map((row: any) => ({
      id_paket: row.id_paket,
      nama_paket: row.nama_paket,
      deskripsi: row.deskripsi,
      deskripsi_harga: row.deskripsi_harga,
      harga: row.harga,
    }));
  } catch (error) {
    console.error('Error fetching tour packages:', error);
  }

  return (
     <>
        <Hero bgImage="/paketwisata.jpg" pageTitle="Paket Wisata" pageLink="/paket-wisata" />

        <section className='pb-28 pt-16 bg-white'>
            <div className="mx-36">
                <div className='flex flex-wrap items-center gap-x-16 gap-y-10 justify-center'>
                {tourPackages.map((pkg) => (
                    <div key={pkg.id_paket} className='shadow-md max-lg:w-[60rem] w-96 lg:min-h-[27rem] p-4 rounded-xl'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>{pkg.nama_paket}</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <h1 className={`${poppins.className} text-left my-4 text-md/ w-[25ch]`}>{pkg.deskripsi_harga}</h1>
                        <p dangerouslySetInnerHTML={{ __html: pkg.deskripsi.replace(/\n/g, '<br />') }} className='mb-3 text-sm/loose text-justify text-gray-500'></p>
                    </div>
                ))}
                </div>

            </div>
        </section>
     </>
  );
};

export default ColumnsPage;

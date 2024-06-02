import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Hero from './_components/Hero';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

export default function Home() {
  return (
    <>
      <Hero bgImage='/header.jpg' />
      <section className="py-16 bg-white">
        <div className='flex flex-row max-xl:flex-wrap lg:mx-36 justify-around'>
          <div className='flex flex-col lg:justify-start shrink'>
            <h1 className={`${poppins.className} max-sm:mx-4 text-4xl w-fit max-w-[25ch] mb-4`}>Agro Eduwisata Organik Mulyaharja</h1>
            <p className='w-fit max-sm:mx-4 max-w-[50ch] text-justify mb-12 mr-4'>Agro Edu Wisata Organik Mulyaharja, atau yang dikenal sebagai Kampung Tematik Mulyaharja, merupakan salah satu desa wisata di Kota Bogor. Dibentuk oleh sekelompok penggerak wisata Kompepar Mulyaharja, desa ini memanfaatkan lahan pertanian yang ada untuk menjadi lokasi wisata edukasi yang berfokus pada pertanian organik. Temukan keindahan surga Kota Bogor dan nikmati kesejukan alam yang menenangkan di tengah kota</p>
            <div className='mb-12 max-sm:mx-4'>
              <a href='/about' className={`${poppins.className} text-gray-50 bg-gray-900 mx-auto px-4 py-3 text-sm`}>LIHAT SELENGKAPNYA</a>
            </div>
          </div>
          <div className='max-xl:w-[500px]'>
            <Image src='/home(2).jpg' width={650} height={400} alt='About Image'/>
          </div>
        </div>
      </section>

      <section className='pt-16 pb-36 bg-white'>
        <div className='text-center'>
          <h1 className={`${poppins.className} text-4xl mb-3`}>Pilihan Paket</h1>
          <p className='w-[70ch] mx-auto mb-8'>Kami memiliki banyak pilihan paket yang akan membuat Anda lebih menyenangkan di Agro Eduwisata Organik Mulyaharja</p>
          <div className='flex flex-wrap flex-row mx-auto items-center gap-12 justify-center'>
            <a href='/paket-wisata' className='shadow-lg p-4 rounded-xl'>
              <Image src="/paketwisata.jpg" width={400} height={400} alt='Paket Wisata'/>
              <h1 className={`${poppins.className} text-left my-4 text-xl`}>PAKET WISATA</h1>
              <p className='w-[40ch] mb-4 text-justify text-gray-500'>Temukan keindahan alam dan keunikan budaya Mulyaharja dengan paket wisata kami yang eksklusif! Dirancang untuk memenuhi berbagai preferensi dan anggaran, paket wisata kami menawarkan pengalaman tak terlupakan bagi setiap jenis petualang.</p>
            </a>
            <a href='/menu' className='shadow-lg p-4 rounded-xl'>
              <Image src="/daftarmenu2.jpg" width={400} height={400} alt='Paket Wisata'/>
              <h1 className={`${poppins.className} text-left my-4 text-xl`}>DAFTAR MENU</h1>
              <p className='w-[40ch] mb-4 text-justify text-gray-500'>Temukan keindahan alam dan keunikan budaya Mulyaharja dengan paket wisata kami yang eksklusif! Dirancang untuk memenuhi berbagai preferensi dan anggaran, paket wisata kami menawarkan pengalaman tak terlupakan bagi setiap jenis petualang.</p>
            </a>
            <a href='/menu' className='shadow-lg p-4 rounded-xl'>
              <Image src="/daftarcoffee.jpg" width={400} height={400} alt='Paket Wisata'/>
              <h1 className={`${poppins.className} text-left my-4 text-xl`}>GARDU COFFEE SPACE</h1>
              <p className='w-[40ch] mb-4 text-justify text-gray-500'>Temukan keindahan alam dan keunikan budaya Mulyaharja dengan paket wisata kami yang eksklusif! Dirancang untuk memenuhi berbagai preferensi dan anggaran, paket wisata kami menawarkan pengalaman tak terlupakan bagi setiap jenis petualang.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
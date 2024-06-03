import { Poppins } from "next/font/google";
import Image from "next/image";
import Hero from "../_components/Hero";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});


export default function About() {
    return (
        <>
            <Hero bgImage="/paketwisata.jpg" pageTitle="Paket Wisata" pageLink="/paket-wisata"/>

            <section className='pt-8 pb-36 bg-white'>
        <div className='text-center'>
          <h1 className={`${poppins.className} text-4xl mb-3`}>Pilihan Paket</h1>
          <p className='w-fit max-w-[70ch] mx-auto mb-8'>Kami memiliki banyak pilihan paket yang akan membuat Anda lebih menyenangkan di Agro Eduwisata Organik Mulyaharja</p>
          <div className='flex flex-wrap flex-row m-8 items-center gap-12 justify-center'>
            <div className="col-lg-4">
							<div className="single-price">
                                <h4>Paket Lengkap</h4>
							<br/>
								<h6>Harga: Rp. 200.000/orang (Minimal 10 orang)</h6>
								<ul className="price-list">
									<li className="d-flex justify-content-between align-items-center">
										<span>Tiket Masuk</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Guide</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Instruksi Bertani & Alat </span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Instruksi Berkebun & Alat</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Caping & Cat Lukis</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Ikan</span>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Makan</span>
									</li>
								</ul>
							</div>
						</div>
            <a href='/menu' className='shadow-lg p-4 rounded-xl hover:scale-105 transition-all'>
              <h1 className={`${poppins.className} text-center my-4 text-xl`}>Paket Lengkap</h1>
              <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
              <h1 className={`${poppins.className} text-left my-4 text-md/ w-[25ch]`}>Harga: Rp. 200.000/orang (Minimal 10 orang)</h1>
              <p className='w-[40ch] mb-4 text-justify text-gray-500'>Temukan keindahan alam dan keunikan budaya Mulyaharja dengan paket wisata kami yang eksklusif! Dirancang untuk memenuhi berbagai preferensi dan anggaran, paket wisata kami menawarkan pengalaman tak terlupakan bagi setiap jenis petualang.</p>
            </a>
            
          </div>
        </div>
      </section>
        </>
    )
}
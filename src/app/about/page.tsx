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
            <Hero bgImage="/hero-bg.jpg" pageTitle="Tentang Kami" pageLink="/about"/>

            <section className="pt-20 pb-8 bg-white">
				<div className="container">
					<div className="flex flex-row flex-wrap justify-around mx-auto">
						<div>
							<Image src="/about.jpg" width={662} height={200} alt="Mulyaharja"/>
						</div>
						<div className="flex flex-col">
							<h1 className={`${poppins.className} text-black text-5xl my-4`}>Apa itu &apos;Mulyaharja&apos;?</h1>
							<p className="text-lg w-fit max-md:mx-2 max-w-[60ch] text-justify">
								Kelurahan Mulyaharja, yang terletak di Kecamatan Bogor Selatan, Kota Bogor,
								dikenal sebagai Kampung Tematik. Sebutan ini berasal dari hasil lomba rancang
								bangun Kampung Tematik yang diselenggarakan oleh Bappeda Kota Bogor pada tahun 2017.
								Salah satu fokus utama di Kelurahan Mulyaharja adalah pengembangan sektor pertanian
								melalui Kelompok Tani Dewasa (KTD) Lemah Duhur, yang telah berdiri sejak tahun 1999.
								KTD ini mengelola budidaya padi organik seluas 3 hektar dan lahan sawah semi-organik
								seluas 23 hektar di Kampung Ciharasas.
							</p>
						</div>
					</div>
				</div>
            </section>


            <section className="py-8 bg-white">
				<div className="container">
					<div className="flex flex-row flex-wrap justify-around mx-auto">
							<p className="text-lg pb-12 w-fit max-md:mx-2 max-w-[60ch] text-justify my-auto">
								Potensi lahan pertanian di Mulyaharja mencakup sekitar 38 hektar,
								dengan 23 hektar di antaranya berada di kawasan Lemah Duhur dan Ciharasas.
								Mayoritas petani di sini menerapkan pola tanam Jajar Legowo, yang merupakan
								metode tanam padi berselang-seling dengan satu baris kosong. Pola ini
								membantu meningkatkan produktivitas lahan dan menjaga kelestarian ekosistem.
							</p>
                        <div>
							<Image src="/about2.jpeg" width={662} height={200} alt="Mulyaharja"/>
						</div>
					</div>
				</div>
            </section>

            <section className="pt-8 pb-36 bg-white">
				<div className="container">
					<div className="text-lg flex flex-col gap-8 justify-center mx-auto">
						<div className="flex justify-center">
                            <p className="w-[128ch] text-justify"> Pada tahun 2015, dalam acara penyerahan sertifikasi pertanian organik, Walikota Bogor menekankan pentingnya melestarikan lahan pertanian dan mengintegrasikannya dengan kegiatan pariwisata. Hal ini diwujudkan dengan sdiresmikannya Kampung Tematik Agro Edu Wisata Organik (AEWO) Mulyaharja pada Januari 2021 oleh Walikota, yang mendapat sambutan luar biasa dari masyarakat. Hingga tahun 2023, kegiatan agrowisata ini terus berkembang, dengan banyak kegiatan pertanian yang masih berlangsung. </p>
                        </div>
                        <div className="flex justify-center">
                            <p className="w-[128ch] text-justify"> Teknologi modern juga telah diadopsi oleh KTD Lemah Duhur. Pengolahan lahan yang sebelumnya menggunakan tenaga kerbau kini dibantu oleh traktor. Panen yang dahulu dilakukan secara manual dengan sabit kini menggunakan alat bernama Paddy Mower untuk mempercepat pemotongan jerami. Proses perontokan padi juga telah dimodernisasi dengan menggunakan power thresher. </p>
                        </div>
                        <div className="flex justify-center">
                            <p className="w-[128ch] text-justify"> Selain itu, kelompok tani ini difasilitasi dengan teknologi IoT dari Direktorat Jenderal Tanaman Pangan, termasuk CCTV untuk memantau kondisi tanaman, alat pengusir burung, serangga, dan tikus, serta alat untuk memantau curah hujan, suhu, kelembaban, dan ketersediaan air di dalam tanah. Semua ini mendukung keberlanjutan pertanian organik di Mulyaharja, sekaligus menjaga kelestarian lingkungan dan ketahanan pangan di daerah tersebut. </p>
                        </div>
					</div>
				</div>
            </section>
        </>
    )
}
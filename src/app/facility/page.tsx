import { Poppins } from "next/font/google";
import Image from "next/image";
import Hero from "../_components/Hero";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});


export default function Facility() {
    return (
        <>
            <Hero bgImage="/hero-bg.jpg" pageTitle="Fasilitas" pageLink="/facility"/>

            <section className="py-20 max-lg:py-12 bg-white">
				<div className="container">
					<div className="flex flex-row flex-wrap justify-center gap-x-32 gap-y-8">
						<div>
							<Image src="/facility.jpg" width={600} height={600} alt="Fasilitas Mulyaharja"/>
						</div>
						<div className="flex flex-col">
							<h1 className={`${poppins.className} text-black max-w-[20ch] text-4xl my-4`}>Fasilitas Lengkap untuk Liburan Sempurna Anda</h1>
							<p className="text-gray-600 text-lg w-fit max-w-[40ch] text-justify my-2">
								Kami dengan bangga menawarkan berbagai fasilitas berkualitas tinggi untuk memastikan kenyamanan dan kepuasan setiap pengunjung. Nikmati pengalaman wisata yang luar biasa dengan fasilitas-fasilitas kami, yang mencakup: 
                            </p>
                            <ul className="my-2 ">
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Spot Instagramable</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Musola</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Toilet Bersih</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Tempat Parkir yang luas</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Bale Riung</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Camping</li>
                                <li className={`${poppins.className} my-3 text-md`}>✔ &nbsp;  Kafe</li>
                            </ul>
						</div>
					</div>
				</div>
            </section>

            <section className="pt-16 max-lg:pt-8 pb-28 bg-white">
				<div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content pb-70 col-lg-9">
		                    <div className="title text-center">
		                        <h1 className={`${poppins.className} text-4xl mb-2`}>Other issues we can help you with</h1>
		                        <p className="mb-16 text-gray-500 text-sm">We all live in an age that belongs to the young at heart. Life that is.</p>
		                    </div>
		                </div>
		            </div>
					<div className="row xl:px-48">
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/spot-instagramable1.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Spot Instagramable</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/Toilet.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Toilet Bersih</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/parkir.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Tempat Parkir Luas</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/bale-riung.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Bale Riung</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/camping.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Camping</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/spotinstagramable2.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Spot Instagramable</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/cafe.jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Cafe</h4>
							</div>
						</div>
						<div className="col-lg-3 flex justify-center col-md-6 hover:text-orange-400 ">
							<div className="single-other-issue">
								<div className="thumb">
									<Image width={250} height={150} className="h-40"  src="/Mushola(1).jpg" alt=""/>
								</div>
								<h4 className={`${poppins.className} my-3 text-lg`}>Musola</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

        </>
    )
}
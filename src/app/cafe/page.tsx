import Hero from '../_components/Hero';
import { Poppins } from 'next/font/google';
import '../css/cafe.css'

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

export default function Cafe() {
    return (
     <>
        <Hero bgImage="/garducoffeebanner.jpg" pageTitle="Gardu Coffee Space" pageLink="/cafe" />

        <section className='pb-28 pt-16 bg-white'>
            <div className="mx-4 lg:mx-36">
                <div className='flex flex-wrap items-start gap-x-16 gap-y-10 justify-center'>
                    <div className='shadow-md max-lg:w-[60rem] w-[40rem] lg:min-h-[27rem] p-4 rounded-xl'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>Daftar Menu</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <ul className="price-list">
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Kentang Goreng</span>
								<div className="price-btn" >Rp 15.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nugget Kentang</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Cireng Bumbu Rujak</span>
								<div className="price-btn">Rp 15.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Pisang Keju</span>
								<div className="price-btn">Rp 15.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Gorengan</span>
								<div className="price-btn">Rp 10.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Roti Bakar</span>
								<div className="price-btn">Rp 15.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nasi Tutug Oncom Ayam Goreng</span>
								<div className="price-btn">Rp 25.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nasi Tutug Oncom Ikan Goreng</span>
								<div className="price-btn">Rp 30.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nasi Ayam Goreng Sambal Penxok</span>
								<div className="price-btn">Rp 25.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nasi Liwet Ayam Goreng/Bakar </span>
								<div className="price-btn">Rp 25.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Nasi Pecel Ayam Goreng</span>
								<div className="price-btn">Rp 25.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Mie Rebus/Goreng</span>
								<div className="price-btn">Rp 13.000</div>
							</li>

						</ul>
                    </div>

                    <div className='shadow-md max-lg:w-[60rem] w-[40rem] lg:min-h-[27rem] p-4 rounded-xl'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>Espresso Based</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <ul className="price-list ">
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Americano</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Cappuccino</span>
								<div className="price-btn">Rp 17.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Cafe Latte</span>
								<div className="price-btn">Rp 17.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Hot Cream Brulee</span>
								<div className="price-btn">Rp 18.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Kopi Susu Aren</span>
								<div className="price-btn">Rp 18.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Creamy Latte</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Butterscotch Macchiato</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center text-sm">
								<span>Mocha Coffee</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
						</ul>
                    </div>

                    <div className='shadow-md max-lg:w-[60rem] w-[40rem] lg:min-h-[27rem] p-4 rounded-xl'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>Non Coffee</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <ul className="price-list ">
							<li className="d-flex justify-content-between align-items-center">
								<span>Strawberry Milk Pulp</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Dark Chocolate</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Black Forest Chocolate</span>
								<div className="price-btn">Rp 19.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Matcha Latte</span>
								<div className="price-btn">Rp 18.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Milk Tea Latte</span>
								<div className="price-btn">Rp 18.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Thai Tea Milk</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Lemon Tea</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Lychee Tea</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Lychee Yakult</span>
								<div className="price-btn">Rp 16.000</div>
							</li>
						</ul>
                    </div>

                    <div className='shadow-md max-lg:w-[60rem] w-[40rem] lg:min-h-[27rem] p-4 rounded-xl'>
                        <h1 className={`${poppins.className} text-center my-4 text-xl`}>Signature Mocktai</h1>
                        <div className="bg-orange-400 h-[1px] w-full mb-4"></div>
                        <ul className="price-list ">
							<li className="d-flex justify-content-between align-items-center">
								<span>Black Citrus Floral</span>
								<div className="price-btn">Rp 20.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Green Sour Punch</span>
								<div className="price-btn">Rp 20.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Red Secang</span>
								<div className="price-btn">Rp 20.000</div>
							</li>
							<li className="d-flex justify-content-between align-items-center">
								<span>Jasmine Fruit Punch</span>
								<div className="price-btn">Rp 20.000</div>
							</li>
						</ul>
                    </div>
                </div>

            </div>
        </section>
     </>

  );
};
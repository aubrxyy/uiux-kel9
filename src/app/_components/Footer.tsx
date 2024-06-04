"use client"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Footer() {
    return (
            <>
                <footer className="footer-area bg-[#04091e] text-white py-24 bottom-0">
    				<div className="container px-12">
    				  <div className="row flex justify-between">
    					<div className="col-lg-3 col-md-6 col-sm-6">
    					  <div className="single-footer-widget mb-4">
							<h6 className={`${poppins.className} text-xl my-4`}>LOKASI</h6>
    						<a href="https://maps.app.goo.gl/mpConzWNcxaCsfwP7" target="_blank">
    							<p className="hover:text-orange-400 hover:underline">
									RT.05/RW.01 Kelurahan Mulyaharja, Kecamatan Bogor Selatan, Kota Bogor, Jawa Barat 16135
	    						</p>
    						</a>
    					  </div>
    					</div>
    					<div className="col-lg-3 col-md-6 col-sm-6">
    					  <div className="single-footer-widget mb-4">
    						<h6 className={`${poppins.className} text-xl my-4`}>NAVIGATION LINKS</h6>
    						<div className="row">
    						  <div className="col">
    							<ul>
    							  <li><a href="/" className="hover:text-orange-400">&gt; Home</a></li>
    							  <li><a href="/about" className="hover:text-orange-400 text-nowrap">&gt; Tentang Kami</a></li>
    							  <li><a href="/facility" className="hover:text-orange-400">&gt; Fasilitas</a></li>
    							</ul>
    						  </div>
    						  <div className="col">
    							<ul>
    							  <li><a href="/paket-wisata" className="hover:text-orange-400 text-nowrap">&gt; Paket Wisata</a></li>
    							  <li><a href="/menu" className="hover:text-orange-400 text-nowrap">&gt; Daftar Menu</a></li>
    							  <li><a href="/cafe" className="hover:text-orange-400 text-nowrap">&gt; Gardu Coffe Space</a></li>
    							</ul>
    						  </div>
    						</div>
    					  </div>
    					</div>
    					<div className="col-lg-4 col-md-6 col-sm-6">
    					  <div className="single-footer-widget mb-4">
    						<h6 className={`${poppins.className} text-xl my-4`}>CONTACT US</h6>
    						<p>
    							<a href="https://wa.me/6281385500703" target="_blank" className="hover:text-orange-400 hover:underline">WhatsApp Reservasi 1 : +62 813-8550-0703</a> <br/>
    							<a href="https://wa.me/6285694342206" target="_blank" className="hover:text-orange-400 hover:underline">WhatsApp Reservasi 2 : +62 856-9434-2206</a> <br/>
    							<a href="https://instagram.com/visitmulyaharja" target="_blank" className="hover:text-orange-400 hover:underline">Instagram : @visitmulyaharja</a>
    						</p>
    
    					  </div>
    					</div>
    				  </div>
                    <hr/>
    					   <p className="mt-4">
    					       &copy;
        					  2024 ALL RIGHTS RESERVED
    					   </p>
    				</div>
    			  </footer>
            </>
    )
}
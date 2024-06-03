'use client'
import Hero from '../_components/Hero';
import '../css/dfmenu.css';
import { Poppins } from 'next/font/google';
import Rating from '@mui/material/Rating';
import { Eye } from 'react-feather';
import { X } from 'react-feather';
import Script from 'next/script';

const poppins = Poppins({
    subsets: ["latin"],
    weight: "600",
});

export default function Menu() {
    return (
        <>
            <Hero bgImage="/daftarmenu2.jpg" pageTitle="Daftar Menu" pageLink="/menu" />

            <section className="dfmenu bg-white" id="dfmenu">
                <h2 className={poppins.className}>Daftar Menu</h2>
                <h3 className={`${poppins.className} text-2xl`}>Menu Nasi Pecel Ayam</h3>
    
                <div className="row">
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"
                            ><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 1" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Paket 1</h4>
                            <Rating name="read-only" value={5} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"
                            ><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasikuning.jpg" alt="Menu 2" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Paket 2</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"
                            ><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 3" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Paket 3</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                </div>
    
                <h3 className={`${poppins.className} text-2xl `}>Menu Nasi Tutug Oncom</h3>
    
                <div className="row">
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 1" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Mantap</h4>
                           <Rating name="read-only" value={5} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasikuning.jpg" alt="Menu 2" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Inpari</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 3" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Baroma</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 4" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Sintanur</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp500.000</div>
                        </div>
                    </div>
                </div>
    
                <h3 className={`${poppins.className} text-2xl `}>Menu Nasi Liwet</h3>
    
                <div className="row">
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 1" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Agro 1</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasikuning.jpg" alt="Menu 2" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Agro 2</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 3" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Agro 3</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 4" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Agro 4</h4>
                            <Rating name="read-only" value={4} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp300.000</div>
                        </div>
                    </div>
                    <div className="menu-card">
                        <div className="menu-icon">
                            <a href="#" className="item-detail-button"><Eye /></a>
                        </div>
                        <div className='flex justify-center'>
                            <img src="/daftarmenu/nasitutug.jpg" alt="Menu 4" />
                        </div>
                        <div className="menu-content">
                            <h4 className={`${poppins.className} text-lg`}>Agro 5</h4>
                            <Rating name="read-only" value={3} readOnly size="large"/>
                            <div className={`${poppins.className} product-price`}>Rp500.000</div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal" id="item-detail-modal">
                <div className="modal-container">
                    <a href="#" className="close-icon"><X className='text-black'/></a>
                    <div className="modal-content">
                    <img src="/daftarmenu/nasitutug.jpg" alt="Menu 1" />
                    <div className="menu-content">
                        <h4 className={`${poppins.className} text-black text-lg`}>Paket 1</h4>
                        <p>
                        Nasi Putih,
                        Ayam Goreng,
                        Karedok/Pecel,
                        Ikan Asin,
                        Tahu & Tempe,
                        Kerupuk,
                        Sambal & Lalapan.
                        </p>
                        <Rating name="read-only" value={4} readOnly size="large" className="my-4" />
                        <div className={`${poppins.className} product-price`}>Rp300.000</div>
                    </div>
                    </div>
                </div>
            </div>
            <Script src="/static/daftarmenu.js" ></Script>
        </>
    );
}
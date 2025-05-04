'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
    FaWhatsapp,
    FaViber,
    FaTelegram,
    FaBars,
    FaTimes,
} from 'react-icons/fa'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <>
            {/* ХЕДЕР */}
            <header className="w-full bg-[#563440] text-white py-3 px-10 flex justify-between items-center fixed top-0 left-0 right-0 z-30">
                {/* Бургер */}
                <button
                    className="lg:hidden text-2xl z-40"
                    onClick={toggleMenu}
                    aria-label="Open menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Навігація на великих екранах */}
                <nav className="hidden lg:flex lg:space-x-8 text-lg font-semibold">
                    <Link href="#about" className="hover:underline">Про мене</Link>
                    <Link href="#services" className="hover:underline">Послуги</Link>
                    <Link href="#contacts" className="hover:underline">Контакти</Link>
                </nav>
                <p className={"hidden lg:flex lg:space-x-8 text-lg font-semibold"}>Психологічна допомога</p>
            </header>

            {/* ВИПАДАЮЧЕ МЕНЮ */}
            {menuOpen && (
                <div className="fixed inset-0 bg-[rgba(122,59,105,0.35)] text-white flex flex-col items-center pt-20 space-y-8 z-20 backdrop-blur-sm">
                    <nav className="flex flex-col items-center space-y-6">
                        <Link href="#about" onClick={() => setMenuOpen(false)} className="hover:underline text-2xl">Про мене</Link>
                        <Link href="#services" onClick={() => setMenuOpen(false)} className="hover:underline text-2xl">Послуги</Link>
                        <Link href="#contacts" onClick={() => setMenuOpen(false)} className="hover:underline text-2xl">Контакти</Link>
                    </nav>

                    {/* Контакти в рядок */}
                    <div className="flex space-x-6 mt-8">
                        <a href="https://wa.me/380956237458" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#CFCFCD] text-3xl">
                            <FaWhatsapp />
                        </a>
                        <a href="viber://chat?number=+380956237458" target="_blank" rel="noopener noreferrer" aria-label="Viber" className="text-[#9A879D] text-3xl">
                            <FaViber />
                        </a>
                        <a href="https://t.me/Gavrulyk_T" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-[#D7DEDC] text-3xl">
                            <FaTelegram />
                        </a>
                    </div>

                    {/* Телефон */}
                    <a href="tel:+380956237458" className="mt-4 text-xl hover:underline">
                        +38 (093) 206-91-97
                    </a>

                    {/*/!* Соцмережі *!/*/}
                    {/*<div className="flex space-x-4 mt-6">*/}
                    {/*    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#CFCFCD] text-2xl">*/}
                    {/*        <FaFacebookF />*/}
                    {/*    </a>*/}
                    {/*    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#9A879D] text-2xl">*/}
                    {/*        <FaInstagram />*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            )}
        </>
    )
}

// components/Footer.tsx

'use client'
import {
    FaWhatsapp,
    FaViber,
    FaTelegram,
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="w-full bg-[#563440] text-white py-8 px-25" id="contacts">
            <div className="bg-[#563440] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Контакти */}
                <div className="footer-section">
                    <h2 className="text-2xl font-semibold">Контакти</h2>
                    <p className="text-lg">+38 (093) 206-91-97</p>
                    <a href="mailto:gavriluktetana79@gmail.com" className="text-lg hover:underline">
                        gavriluktetana79@gmail.com
                    </a>
                </div>

                {/* Технічна підтримка */}
                <div className="footer-section">
                    <h2 className="text-2xl font-semibold">Технічна підтримка</h2>
                    <p className="text-lg">Ми завжди раді допомогти! Звертайтесь за технічною підтримкою.</p>
                    <a href="mailto:psihologonlinesup@gmail.com" className="text-lg hover:underline">
                        psihologonlinesup@gmail.com
                    </a>
                </div>

                {/* Соціальні мережі */}
                <div className="footer-section">
                    <h2 className="text-2xl font-semibold ">Соціальні мережі</h2>
                    <div className="flex space-x-4 py-8">
                        <a href="https://wa.me/380956237458" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#FFFFFF] px-2 transform scale-180">
                            <FaWhatsapp />
                        </a>
                        <a href="viber://chat?number=+380956237458" target="_blank" rel="noopener noreferrer" aria-label="Viber" className="text-[#FFFFFF] px-2 transform scale-180">
                            <FaViber />
                        </a>
                        <a href="https://t.me/Gavrulyk_T" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-[#FFFFFF] px-2 transform scale-180">
                            <FaTelegram />
                        </a>
                        {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#FFFFFF] px-2 transform scale-180">*/}
                        {/*    <FaFacebookF />*/}
                        {/*</a>*/}
                        {/*<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#FFFFFF] px-2 transform scale-180">*/}
                        {/*    <FaInstagram />*/}
                        {/*</a>*/}

                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-[#CFCFCD]">
                <p>&copy; 2025 Психологічна допомога. Усі права захищені.</p>
            </div>
        </footer>
    )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Hiện navbar khi cuộn lên hoặc ở top
            // Ẩn navbar khi cuộn xuống và không ở top
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`
            fixed top-0 left-0 right-0 z-50
            transition-transform duration-300
            ${visible ? 'translate-y-0' : '-translate-y-full'}
            bg-white/80 backdrop-blur-sm border-b border-gray-100
        `}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-4">
                    <Link
                        href="/"
                        className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text"
                    >
                        Cardahub
                    </Link>
                    <ul className="flex space-x-8">
                        <li>
                            <Link
                                href="#product"
                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://github.com/Weminal-labs/cardahub"
                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                            >
                                Source Code
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://s.craft.me/X12jV2FFnxRh3s"
                                className="text-gray-600 hover:text-primary transition-colors duration-300"
                            >
                                Document
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
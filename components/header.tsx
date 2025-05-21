import { Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <header className="bg-gray-900 text-white py-2 md:py-4">
            <div className="container mx-auto px-3 md:px-4 flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="flex items-center mb-2 md:mb-0">
                    <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-400 mr-2" />
                    <h1 className="text-lg md:text-xl font-bold text-white">Top Betting Irish Site</h1>
                </Link>
                <nav className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm">
                    <Link href="/" className="text-white hover:text-yellow-400 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-yellow-400 transition-colors">
                        About Us
                    </Link>
                    <Link href="/terms" className="text-white hover:text-yellow-400 transition-colors">
                        Terms
                    </Link>
                    <Link href="/privacy" className="text-white hover:text-yellow-400 transition-colors">
                        Privacy
                    </Link>
                    <Link href="/cookies" className="text-white hover:text-yellow-400 transition-colors">
                        Cookies
                    </Link>
                </nav>
            </div>
        </header>
    );
};
import { useState, useEffect } from 'react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
    // Initialize dark mode from system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            return savedMode ? JSON.parse(savedMode) : 
                   window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    // Add state for menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Update class and save preference
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={`flex justify-between p-4 sticky top-0 ${
                isMenuOpen 
                    ? 'bg-gray-800 dark:bg-slate-300' 
                    : 'bg-gray-900/95 dark:bg-gray-200/95'
                } lg:bg-transparent dark:lg:bg-transparent backdrop-blur-sm z-50`}>
                <button 
                    onClick={toggleTheme} 
                    className={`${isMenuOpen ? 'text-white dark:text-black' : 'text-white dark:text-gray-900'}`}
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDarkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
                </button>
                
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`${isMenuOpen ? 'text-white dark:text-black' : 'text-white dark:text-gray-900'}`}
                    aria-label="Toggle navigation menu" 
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? 
                        <XMarkIcon className="h-6 w-6" /> : 
                        <Bars3Icon className="h-6 w-6" />
                    }
                </button>
            </nav>

            {/* Fullscreen Navigation Menu */}
            <div className={`fixed inset-0 bg-gray-800 dark:bg-slate-300 z-40 transform transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="h-full flex items-center">
                    <ul className="text-left space-y-12 md:space-y-20 w-full px-6 md:px-12">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-white dark:text-black text-4xl md:text-6xl font-bold hover:text-purple-700 dark:hover:text-blue-700 transition-colors block"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;

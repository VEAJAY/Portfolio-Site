import { useState, useEffect } from 'react';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

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

    useEffect(() => {
        // Update class and save preference
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="flex justify-between p-4 sticky top-0 bg-gray-900/95 dark:bg-gray-200/95 lg:bg-transparent dark:lg:bg-transparent backdrop-blur-sm">
            <button 
                onClick={toggleTheme} 
                className="text-white dark:text-gray-900"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {isDarkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
            
            <a href="#">
                <button className="text-white dark:text-gray-900" aria-label="Toggle navigation menu" aria-expanded="false">
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </a>
            
        </nav>
    );
}

export default Navbar;

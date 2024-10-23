import { useState, useEffect } from 'react';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="flex justify-between p-4 sticky top-0 md:bg-transparent bg-gray-900 dark:bg-gray-200">
            <button onClick={toggleTheme} className="text-white dark:text-gray-900">
                {isDarkMode ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>

            <button className="text-white dark:text-gray-900">
                <Bars3Icon className="h-6 w-6" />
            </button>
        </div>
    );
}

export default Navbar;

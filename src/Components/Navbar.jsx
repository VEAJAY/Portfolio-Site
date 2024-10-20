import { Bars3Icon, MoonIcon } from '@heroicons/react/24/outline';

function Navbar() {
    return (
        <div className="flex justify-between p-4 sticky top-0">
            
            <button className="text-white">
                <MoonIcon className="h-6 w-6" />
            </button>

            
            <button className="text-white">
                <Bars3Icon className="h-6 w-6" />
            </button>
        </div>
    );
}

export default Navbar;
